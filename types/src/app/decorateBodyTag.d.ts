/**
 * Decorates the template and theme by adding classes to the body.
 * The classes are defined in the meta tags of the document.
 * Usefull for styling the page based on the template and theme meta tags
 * that can be set in the metadata table in EDS.
 * @example
 * <meta name="template" content="template-name">
 * <meta name="theme" content="theme-name">
 * @example
 * <body class="template-name theme-name">
 */
export declare function decorateBodyTag(): void;
