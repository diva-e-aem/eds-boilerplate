import { DebuggerService } from '@kluntje/services';

import { SheetsResponse } from 'Types/sheetResponse.types';
import { Placeholder } from 'Types/siteMap.types';
import { toCamelCase } from 'Utils/toCamelCase';

import FetchService, { FetchServiceOptions } from './fetch.service';

type PlaceholderLibrary = { [key: string]: PlaceholderEntries };
type PlaceholderEntries = { [key: string]: string };

class PlaceholderService {
  private readonly placeholderLibrary: PlaceholderLibrary = {};
  private language = 'default';

  private async fetchPlaceholders(lang?: string): Promise<PlaceholderEntries> {
    if (lang) {
      this.language = lang;
    }

    const url = `${this.language === 'default' ? '' : this.language}/placeholders.json`;
    const options: FetchServiceOptions = {
      cacheOptions: { cacheType: 'runtime' },
    };

    if (!this.placeholderLibrary[this.language]) {
      try {
        const placeholderResponse = await FetchService.fetchJson<SheetsResponse<Placeholder>>(url, options);

        const placeholders: PlaceholderEntries = {};
        placeholderResponse.data
          .filter((placeholder) => Boolean(placeholder.Key))
          .forEach((placeholder) => {
            placeholders[toCamelCase(placeholder.Key)] = placeholder.Text;
          });

        this.placeholderLibrary[this.language] = placeholders;
      } catch (error) {
        // error loading placeholders
        DebuggerService.error('PlaceholderService: Error fetching placeholder data:', error);

        // just return empty object and do not store it, so we can retry
        return {};
      }
    }

    return this.placeholderLibrary[this.language];
  }

  public async getPlaceHolder(key: string, lang?: string): Promise<string> {
    const placeholders = await this.fetchPlaceholders(lang);

    const placeholder = placeholders[toCamelCase(key)];
    if (!placeholder) {
      DebuggerService.error(`PlaceholderService: Placeholder with key "${key}" could not be found.`);

      // fail gracefully and return key, to display something
      return key;
    }

    return placeholder;
  }
}

export default new PlaceholderService();
