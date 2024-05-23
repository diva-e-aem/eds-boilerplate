import { getHref } from './getHref';
import * as isSidekickLibraryActive from './isSidekickLibraryActive';

describe('getHref', () => {
  const previousWindow = window;

  afterEach(() => {
    jest.restoreAllMocks();
    window = previousWindow; // eslint-disable-line no-global-assign, no-native-reassign
  });

  it('returns window location href when Sidekick Library is not active', () => {
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(false);

    const mockWindowLocationHref = 'https://example.com/page';
    window.location.href = mockWindowLocationHref;

    const result = getHref();

    expect(result).toBe(mockWindowLocationHref);
  });

  it('returns parent window origin with path query param when Sidekick Library is active', () => {
    const mockParentLocationOrigin = 'https://example.com';
    const mockPathQueryParam = '/block.html';
    const mockParentLocationHref = `${mockParentLocationOrigin}?path=${mockPathQueryParam}`;
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(true);

    window.location.href = mockParentLocationHref;

    const result = getHref();

    expect(result).toBe(`${mockParentLocationOrigin}${mockPathQueryParam}`);
  });
});
