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
export declare function createOptimizedPicture(createOptimizedPictureArgs: CreateOptimizedPictureArgs): HTMLPictureElement | undefined;
export {};
