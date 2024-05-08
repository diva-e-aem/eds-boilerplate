export interface FetchServiceCacheOptions {
    cacheType?: 'runtime';
}
export interface FetchServiceOptions {
    fetchOptions?: RequestInit;
    cacheOptions?: FetchServiceCacheOptions;
}
declare class FetchService {
    private requestPipeline;
    private runtimeCache;
    fetchJson<T>(endpoint: string, options?: FetchServiceOptions): Promise<T>;
    fetchText(endpoint: string, options?: FetchServiceOptions): Promise<string>;
    private fetchData;
    private getResponseJSON;
    private getResponseText;
    private getCachedData;
    private setCachedData;
}
declare const _default: FetchService;
export default _default;
