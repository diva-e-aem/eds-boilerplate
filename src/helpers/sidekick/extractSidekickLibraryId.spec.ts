import { extractSidekickLibraryId, SidekickElement } from './extractSidekickLibraryId';
import * as isSidekickLibraryActive from './isSidekickLibraryActive';

describe('extractSidekickLibraryId', () => {
  let expected: SidekickElement;

  beforeEach(() => {
    expected = {
      dataLibraryId: undefined,
      content: new DocumentFragment(),
      href: '',
    };
  });

  test('returns default constructed element when no element is provided', () => {
    const result = extractSidekickLibraryId();
    expect(result).toEqual(expected);
  });

  test('extracts content correctly', () => {
    const element = document.createElement('div');
    const innerHTML = '<p>Hello, World!</p>';

    element.innerHTML = innerHTML;

    const result = extractSidekickLibraryId(element);
    const target = document.createElement('div');
    target.append(result.content);
    expect(target.innerHTML).toEqual(innerHTML);
  });

  test('extracts href attribute correctly for anchor elements', () => {
    const element = document.createElement('a');
    const href = 'https://example.com/';

    element.href = href;
    expected.href = href;

    const result = extractSidekickLibraryId(element);
    expect(result).toEqual(expected);
  });

  test('extracts data-library-id attribute correctly when Sidekick Library is active and data library id is not null', () => {
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(true);

    const element = document.createElement('div');

    element.setAttribute('data-library-id', '12345');
    expected.dataLibraryId = '12345';

    const result = extractSidekickLibraryId(element);

    expect(result).toEqual(expected);
  });

  test('does not extract data-library-id attribute when Sidekick Library is not active', () => {
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(false);

    const element = document.createElement('div');
    element.setAttribute('data-library-id', '12345');

    const result = extractSidekickLibraryId(element);
    expect(result).toEqual(expected);
  });
});
