import { getHref } from 'Helpers/sidekick/getHref';

/**
 * Represents a breakpoint configuration used in responsive web design.
 *
 * @interface BreakPoint
 * @property {number} [media] - The media query string defining the condition for this breakpoint.
 * @property {number} [width] - The width associated with this breakpoint.
 *
 * @example
 * // Example usage:
 * const exampleBreakPoint: BreakPoint = {
 *   media: "(min-width: 600px)",
 *   width: "100"
 * };
 */
interface BreakPoint {
  media?: string;
  width?: number;
}

/**
 * Represents the arguments for creating an optimized picture element.
 *
 * @interface CreateOptimizedPictureArgs
 * @property {string} src - The URL of the image.
 * @property {string} alt - The alternative text for the image.
 * @property {number} width - The width of the image in CSS pixels.
 * @property {number} height - The height of the image in CSS pixels.
 * @property {boolean} [eager] - Whether to load the image immediately.
 * @property {BreakPoint[]} [breakpoints] - The breakpoints for responsive images.
 */
export interface CreateOptimizedPictureArgs {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
  breakpoints?: BreakPoint[];
}

/**
 * Creates an optimized HTML picture element with responsive image sources and a fallback image.
 *
 * @param {CreateOptimizedPictureArgs} createOptimizedPictureArgs - The arguments for creating the picture element.
 * @returns {HTMLPictureElement} - The created HTML picture element.
 *
 * @example
 * const args = {
 *   src: 'image.jpg',
 *   alt: 'Example Image',
 *   width: '200',
 *   height: '150',
 *   eager: true,
 *   breakpoints: [
 *     { media: '(min-width: 600px)', width: '800' },
 *     { media: '(min-width: 1200px)', width: '1600' }
 *   ]
 * };
 * const pictureElement = createOptimizedPicture(args);
 * document.body.appendChild(pictureElement);
 *
 * @remarks
 * The last breakpoint provided in the `breakpoints` array is used as the source for the fallback image.
 */
export function createOptimizedPicture(
  createOptimizedPictureArgs: CreateOptimizedPictureArgs
): HTMLPictureElement | undefined {
  if (createOptimizedPictureArgs.src === '') return undefined;

  const {
    src,
    alt,
    eager = false,
    width,
    height,
    breakpoints = [{ media: '(min-width: 600px)', width: 2000 }, { width: 750 }],
  } = createOptimizedPictureArgs;
  const url = new URL(src, getHref());
  const picture = document.createElement('picture');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  // webp
  breakpoints.forEach((breakpoint: BreakPoint): void => {
    const source = document.createElement('source');
    if (breakpoint.media) source.setAttribute('media', breakpoint.media);
    source.setAttribute('type', 'image/webp');
    source.setAttribute('srcset', `${pathname}?width=${breakpoint.width}&format=webply&optimize=medium`);
    picture.appendChild(source);
  });

  // fallback
  breakpoints.forEach((breakpoint: Record<string, string>, index: number): void => {
    if (index < breakpoints.length - 1) {
      const source = document.createElement('source');
      if (breakpoint.media) source.setAttribute('media', breakpoint.media);
      source.setAttribute('srcset', `${pathname}?width=${breakpoint.width}&format=${ext}&optimize=medium`);
      picture.appendChild(source);
    } else {
      const img = document.createElement('img');
      img.setAttribute('loading', eager ? 'eager' : 'lazy');
      img.setAttribute('alt', alt);
      img.setAttribute('width', width.toString());
      img.setAttribute('height', height.toString());
      picture.appendChild(img);
      img.setAttribute('src', `${pathname}?width=${breakpoint.width}&format=${ext}&optimize=medium`);
    }
  });

  return picture;
}
