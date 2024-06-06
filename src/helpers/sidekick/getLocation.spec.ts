import { getLocation } from './getLocation';
import * as isSidekickLibraryActive from './isSidekickLibraryActive'; // Importing it as a module

describe('getLocation', () => {
  const previousWindow = window;

  afterEach(() => {
    jest.restoreAllMocks();
    window = previousWindow; // eslint-disable-line no-global-assign, no-native-reassign
  });

  it('should return window.location when Sidekick Library is not active', () => {
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(false);

    const result = getLocation();

    expect(result).toBe(window.location);
  });

  it('should return window.parent.location when Sidekick Library is active', () => {
    jest.spyOn(isSidekickLibraryActive, 'isSidekickLibraryActive').mockReturnValue(true);

    const mockParentLocation = {} as Location;
    Object.defineProperty(window, 'parent', { value: { location: mockParentLocation } });

    const result = getLocation();

    expect(result).toBe(mockParentLocation);
  });
});
