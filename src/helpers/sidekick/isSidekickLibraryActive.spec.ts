import { isSidekickLibraryActive } from './isSidekickLibraryActive';

describe('isSidekickLibraryActive', () => {
  const previousWindow = window;

  afterEach(() => {
    jest.restoreAllMocks();
    window = previousWindow; // eslint-disable-line no-global-assign, no-native-reassign
  });

  it('should return false if #main element does not exist', () => {
    document.body.innerHTML = '';
    const result = isSidekickLibraryActive();
    expect(result).toBe(false);
  });

  it('should return false if #main element does not have sidekick-library class', () => {
    document.body.innerHTML = '<div id="main"></div>';
    const result = isSidekickLibraryActive();
    expect(result).toBe(false);
  });

  it('should return false if window location href is not about:srcdoc', () => {
    document.body.innerHTML = '<div id="main" class="sidekick-library"></div>';

    Object.defineProperty(window, 'location', {
      value: { href: 'https://example.com' },
      writable: true,
    });
    const result = isSidekickLibraryActive();

    expect(result).toBe(false);
  });

  it('should return true if all conditions are met', () => {
    document.body.innerHTML = '<div id="main" class="sidekick-library"></div>';

    Object.defineProperty(window, 'location', {
      value: { href: 'about:srcdoc' },
      writable: true,
    });
    const result = isSidekickLibraryActive();
    expect(result).toBe(true);
  });
});
