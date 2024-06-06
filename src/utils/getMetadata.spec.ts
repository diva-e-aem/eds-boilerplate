import { getMetadata } from 'Utils/getMetadata';

describe('getMetadata', () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <meta name="description" content="This is a sample description.">
      <meta property="og:title" content="Open Graph Title">
      <meta name="keywords" content="keyword1, keyword2, keyword3">
    `;
  });

  afterEach(() => {
    document.head.innerHTML = '';
  });

  test('returns content of metadata tag with name attribute', () => {
    const metaContent = getMetadata('description');
    expect(metaContent).toBe('This is a sample description.');
  });

  test('returns content of metadata tag with property attribute', () => {
    const metaContent = getMetadata('og:title');
    expect(metaContent).toBe('Open Graph Title');
  });

  test('returns empty string if metadata tag not found', () => {
    const metaContent = getMetadata('author');
    expect(metaContent).toBe('');
  });

  test('returns empty string if document not provided', () => {
    document.head.innerHTML = '';
    const metaContent = getMetadata('description', undefined);
    expect(metaContent).toBe('');
  });

  test('returns concatenated content if multiple metadata tags found', () => {
    const metaContent = getMetadata('keywords');
    expect(metaContent).toBe('keyword1, keyword2, keyword3');
  });
});
