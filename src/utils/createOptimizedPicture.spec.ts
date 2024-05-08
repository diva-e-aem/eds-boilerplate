import { createOptimizedPicture, CreateOptimizedPictureArgs } from 'Utils/createOptimizedPicture';

describe('createOptimizedPicture', () => {
  const baseArgs: CreateOptimizedPictureArgs = {
    src: 'image.jpg',
    alt: 'Example Image',
    width: 200,
    height: 150,
  };

  test('creates correct number of source elements', () => {
    const args: CreateOptimizedPictureArgs = {
      ...baseArgs,
      breakpoints: [
        { media: '(min-width: 600px)', width: 800 },
        { media: '(min-width: 1200px)', width: 1600 },
      ],
    };
    const pictureElement = createOptimizedPicture(args)!;
    const sources = pictureElement.querySelectorAll('source');
    // Since image tag itself should not be counted
    expect(sources.length).toBe(args.breakpoints!.length * 2 - 1);
  });

  test('sets correct attributes for img element', () => {
    const args: CreateOptimizedPictureArgs = {
      ...baseArgs,
      breakpoints: [{ width: 750 }],
    };
    const pictureElement = createOptimizedPicture(args)!;
    const imgElement = pictureElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement!.getAttribute('alt')).toBe(args.alt);
    expect(imgElement!.getAttribute('width')).toBe(args.width.toString());
    expect(imgElement!.getAttribute('height')).toBe(args.height.toString());
  });

  test('creates responsive sources with correct media queries', () => {
    const args: CreateOptimizedPictureArgs = {
      ...baseArgs,
      breakpoints: [
        { media: '(min-width: 600px)', width: 800 },
        { media: '(min-width: 1200px)', width: 1600 },
      ],
    };

    const pictureElement = createOptimizedPicture(args)!;
    const sources = pictureElement.querySelectorAll('source');
    const medias = Array.from(sources).map((source) => source.getAttribute('media'));

    args.breakpoints?.forEach((breakpoint) => {
      expect(medias).toContain(breakpoint.media);
    });
  });

  test('sets correct source URLs for responsive images', () => {
    const args: CreateOptimizedPictureArgs = {
      ...baseArgs,
      breakpoints: [{ width: 800 }, { width: 1600 }],
    };

    const pictureElement = createOptimizedPicture(args)!;
    const sources = pictureElement.querySelectorAll('source');

    args.breakpoints?.forEach((breakpoint, index) => {
      const source = sources[index]; // Source elements are in consecutive order
      const expectedURL = `/image.jpg?width=${breakpoint.width}&format=webply&optimize=medium`;
      expect(source.getAttribute('srcset')).toContain(expectedURL);
    });
  });

  test('fallback image uses last breakpoint', () => {
    const args: CreateOptimizedPictureArgs = {
      ...baseArgs,
      breakpoints: [{ width: 800 }, { width: 1600 }],
    };
    const pictureElement = createOptimizedPicture(args)!;
    const imgElement = pictureElement.querySelector('img');
    const lastBreakpoint = args.breakpoints!.slice(-1)[0];
    const expectedWidth = lastBreakpoint.width?.toString();
    expect(imgElement!.getAttribute('src')).toContain(`?width=${expectedWidth}`);
  });

  test('sets loading attribute to lazy by default', () => {
    const pictureElement = createOptimizedPicture(baseArgs)!;
    const imgElement = pictureElement.querySelector('img');
    expect(imgElement!.getAttribute('loading')).toBe('lazy');
  });

  test('sets loading attribute to eager when specified', () => {
    const args: CreateOptimizedPictureArgs = {
      ...baseArgs,
      eager: true,
    };
    const pictureElement = createOptimizedPicture(args)!;
    const imgElement = pictureElement.querySelector('img');
    expect(imgElement!.getAttribute('loading')).toBe('eager');
  });
});
