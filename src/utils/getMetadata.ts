/**
 * Retrieves the content of a specified metadata tag from the document head.
 *
 * @param {string} value - The name or property attribute value of the metadata tag.
 * @param {Document} [doc=document] - The document to search for the metadata tag (default is the current document).
 * @returns {string} - The content of the metadata tag, if found; otherwise, an empty string.
 *
 * @example
 * Example 1:
 * Assuming <meta name="description" content="This is a sample description."> exists in the document head.
 * const metaContent = getMetadata('description');
 * console.log(metaContent);
 * Output: 'This is a sample description.'
 *
 * @example
 * Example 2:
 * Assuming <meta property="og:title" content="Open Graph Title"> exists in the document head.
 * const metaContent = getMetadata('og:title', document);
 * console.log(metaContent);
 * Output: 'Open Graph Title'
 */
export function getMetadata(value: string, doc: Document = document): string {
  const attr: 'property' | 'name' = value && value.includes(':') ? 'property' : 'name';
  const metaTags: HTMLMetaElement[] =
    ([...doc.head.querySelectorAll(`meta[${attr}="${value}"]`)] as HTMLMetaElement[]) || [];
  const meta: string = metaTags.map((metaElement: HTMLMetaElement) => metaElement.content).join(', ');
  return meta.length ? meta : '';
}
