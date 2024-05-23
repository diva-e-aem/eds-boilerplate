import { getOrigin } from './getOrigin';
import * as isSidekickLibraryActive from './isSidekickLibraryActive';

describe('getOrigin', () => {
  const previousWindow = window;

  afterEach(() => {
    jest.restoreAllMocks();
    window = previousWindow; // eslint-disable-line no-global-assign, no-native-reassign
  });

  it('should return window.location.origin when Sidekick Library is not active', () => {
    const mockLocationOrigin = 'https://example.com';
    Object.defineProperty(window, 'location', { value: { origin: mockLocationOrigin } });
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(false);

    const result = getOrigin();

    expect(result).toBe(mockLocationOrigin);
  });

  it('should return window.parent.location.origin when Sidekick Library is active', () => {
    const mockParentOrigin = 'https://parent.example.com';
    Object.defineProperty(window, 'parent', { value: { location: { origin: mockParentOrigin } } });
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(true);

    const result = getOrigin();

    expect(result).toBe(mockParentOrigin);
  });
});
