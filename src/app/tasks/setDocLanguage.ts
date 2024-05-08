import { getMetadata } from '../../utils/getMetadata';
import { undefinedOnEmpty } from '../../utils/undefinedOnEmpty';

/*
 * This function sets the language of the document based on the language metadata.
 */
export function setDocLanguage() {
  const lang = getMetadata('language');
  document.documentElement.lang = undefinedOnEmpty(lang) || 'en';
}
