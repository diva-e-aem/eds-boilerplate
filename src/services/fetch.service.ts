import { DebuggerService } from '@kluntje/services';

import { getUrlForEndpoint } from '../app/utils/getUrlForEndpoint';
import { RuntimeCache } from '../utils/RuntimeCache';

export interface FetchServiceCacheOptions {
  cacheType?: 'runtime'; // 'local' | 'session' | "request" can be added later
}

export interface FetchServiceOptions {
  fetchOptions?: RequestInit;
  cacheOptions?: FetchServiceCacheOptions;
}

class FetchService {
  private requestPipeline: Map<string, Promise<Response>> = new Map();

  private runtimeCache = new RuntimeCache();

  public fetchJson<T>(endpoint: string, options: FetchServiceOptions = {}): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/unbound-method -- `getResponseJSON` does not access `this`
    return this.fetchData(getUrlForEndpoint(endpoint).href, options, this.getResponseJSON<T>);
  }

  public fetchText(endpoint: string, options: FetchServiceOptions = {}): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/unbound-method -- `getResponseText` does not access `this`
    return this.fetchData(getUrlForEndpoint(endpoint).href, options, this.getResponseText);
  }

  private async fetchData<T>(
    url: string,
    options: FetchServiceOptions,
    dataMapper: (Response) => Promise<T>
  ): Promise<T> {
    const { cacheOptions } = options;
    const cachedData = this.getCachedData<T>(url, cacheOptions);
    if (cachedData !== null) return cachedData;

    const pipelinedRequest = this.requestPipeline.get(url);
    if (pipelinedRequest !== undefined) return dataMapper(await pipelinedRequest);

    const request = fetch(url, options.fetchOptions);
    this.requestPipeline.set(url, request);

    const response = await request;
    this.requestPipeline.delete(url);
    const responseData = await dataMapper(response);

    this.setCachedData(url, responseData, cacheOptions);

    if (!response.ok) {
      const errorText = await response.text();

      DebuggerService.error(`FetchService: Error fetching data from ${url}: ${errorText}`);

      throw new Error(`Error fetching data from ${url}: ${errorText}`);
    }
    return responseData;
  }

  private async getResponseJSON<T>(response: Response): Promise<T> {
    const responseClone = response.clone();
    const responseJson = (await responseClone.json()) as T;
    return responseJson;
  }

  private async getResponseText(response: Response): Promise<string> {
    const responseClone = response.clone();
    const responseText = await responseClone.text();
    return responseText;
  }

  private getCachedData<T>(url: string, cacheOptions?: FetchServiceCacheOptions): T | null {
    if (cacheOptions?.cacheType === 'runtime') {
      return this.runtimeCache.get(url) ?? null;
    }
    return null;
  }

  private setCachedData<T>(url: string, data: T, cacheOptions?: FetchServiceCacheOptions): void {
    if (cacheOptions?.cacheType === 'runtime') {
      this.runtimeCache.set(url, data);
    }
  }
}

export default new FetchService();
