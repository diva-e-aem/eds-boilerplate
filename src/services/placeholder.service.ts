import { DebuggerService } from '@kluntje/services';
import FetchService, { FetchServiceOptions } from './fetch.service.ts';
import { SheetsResponse } from 'Types/sheetResponse.types.ts';
import { Placeholder } from 'Types/siteMap.types.ts';

class PlaceholderService {
  public async getPlaceHolder(key: string): Promise<string> {
    try {
      const url = '/placeholder.json';
      const options: FetchServiceOptions = {
        cacheOptions: { cacheType: 'runtime' },
      };
      const sheetsResponse = await FetchService.fetchJson<SheetsResponse<Placeholder>>(url, options);
      const placeholderRecord = sheetsResponse.data.find((item: Placeholder): boolean => item.Key === key);

      if (!placeholderRecord) {
        const errorMessage = `PlaceholderService: Placeholder with key ${key} could not be found.`;
        DebuggerService.error(errorMessage);
        throw new Error(errorMessage);
      }

      return placeholderRecord!.Text;
    } catch (error) {
      DebuggerService.error('PlaceholderService: Error fetching placeholder data:', error);
      throw error;
    }
  }
}

export default new PlaceholderService();
