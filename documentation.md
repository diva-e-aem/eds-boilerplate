<details><summary>src/directives</summary>

## :wrench: Constants

- [getSidekickLibraryId](#gear-getsidekicklibraryid)

### :gear: getSidekickLibraryId

| Constant | Type |
| ---------- | ---------- |
| `getSidekickLibraryId` | `(sidekickElement: SidekickElement) => DirectiveResult<typeof SidekickLibraryId>` |




</details>

<details><summary>src/helpers/sidekick</summary>

## :toolbox: Functions

- [isSidekickLibraryActive](#gear-issidekicklibraryactive)
- [extractSidekickLibraryId](#gear-extractsidekicklibraryid)
- [getHref](#gear-gethref)
- [getLocation](#gear-getlocation)
- [getOrigin](#gear-getorigin)

### :gear: isSidekickLibraryActive

Verifies if the Sidekick Library Plugin is in use by checking if the page is running in an iframe with srcdoc
and if the main element has the sidekick-library class.

| Function | Type |
| ---------- | ---------- |
| `isSidekickLibraryActive` | `() => boolean` |

### :gear: extractSidekickLibraryId

Extracts the innerHTML, the href attribute (if defined) and
the data-library-id attribute (if the Sidekick Library Plugin is active) of a given HTML element.

| Function | Type |
| ---------- | ---------- |
| `extractSidekickLibraryId` | `(element?: HTMLElement or HTMLAnchorElement or null or undefined) => SidekickElement` |

Parameters:

* `element`: - The original HTMLElement or HTMLAnchorElement.


Examples:

const cta = extractSidekickLibraryId(document.querySelector('a'));
<a
 href="${cta.href}"
 data-library-id="${ifDefined(cta.dataLibraryId)}"
 contenteditable="${ifDefined(cta.dataLibraryId ? true : undefined)}">
   ${cta.content}
</a>


### :gear: getHref

Returns the true origin of the current page in the browser.
If the page is running in an iframe with srcdoc, the ancestor origin + the path query param is returned.

| Function | Type |
| ---------- | ---------- |
| `getHref` | `() => string` |

Examples:

const url = new URL(src, getHref());


### :gear: getLocation

Returns the true origin of the current page in the browser.
If the page is running in an iframe with srcdoc, the query param is returned.

| Function | Type |
| ---------- | ---------- |
| `getLocation` | `() => Location` |

Examples:

const searchParams = new URLSearchParams(getLocation().search);


### :gear: getOrigin

Returns the true origin of the current page in the browser.
If the page is running in an iframe with srcdoc, the ancestor origin is returned.

| Function | Type |
| ---------- | ---------- |
| `getOrigin` | `() => string` |

Examples:

const origin = getOrigin();




## :cocktail: Types

- [SidekickElement](#gear-sidekickelement)

### :gear: SidekickElement

Represents the constructed Element.

| Type | Type |
| ---------- | ---------- |
| `SidekickElement` | `{
  dataLibraryId?: string;
  content: string;
  href?: string;
}` |



</details>

<details><summary>src/utils</summary>

## :toolbox: Functions

- [addClasses](#gear-addclasses)
- [cleanUpBlock](#gear-cleanupblock)
- [createOptimizedPicture](#gear-createoptimizedpicture)
- [getChildNodeFloat](#gear-getchildnodefloat)
- [getChildNodeInt](#gear-getchildnodeint)
- [getChildNodeText](#gear-getchildnodetext)
- [getMetadata](#gear-getmetadata)
- [replaceBySpecifier](#gear-replacebyspecifier)
- [toCamelCase](#gear-tocamelcase)
- [toClassName](#gear-toclassname)
- [undefinedOnEmpty](#gear-undefinedonempty)
- [wrap](#gear-wrap)

### :gear: addClasses

Adds CSS classes to an HTML element.

| Function | Type |
| ---------- | ---------- |
| `addClasses` | `(element: HTMLElement, classes: string) => void` |

Parameters:

* `element`: - The HTML element to which classes will be added.
* `classes`: - A string containing CSS classes separated by commas.


Examples:

const element = document.getElementById('myElement');
const classesToAdd = 'class1, class2, class3';
addClasses(element, classesToAdd);


### :gear: cleanUpBlock

Cleans up a block by removing its inner HTML content and resetting its display property.

| Function | Type |
| ---------- | ---------- |
| `cleanUpBlock` | `(block: HTMLElement) => void` |

Parameters:

* `block`: - The HTML element representing the block to clean up.


### :gear: createOptimizedPicture

Creates an optimized HTML picture element with responsive image sources and a fallback image.

| Function | Type |
| ---------- | ---------- |
| `createOptimizedPicture` | `(createOptimizedPictureArgs: CreateOptimizedPictureArgs) => HTMLPictureElement or undefined` |

Parameters:

* `createOptimizedPictureArgs`: - The arguments for creating the picture element.


Examples:

const args = {
  src: 'image.jpg',
  alt: 'Example Image',
  width: '200',
  height: '150',
  eager: true,
  breakpoints: [
    { media: '(min-width: 600px)', width: '800' },
    { media: '(min-width: 1200px)', width: '1600' }
  ]
};
const pictureElement = createOptimizedPicture(args);
document.body.appendChild(pictureElement);


### :gear: getChildNodeFloat

Retrieves the floating point value of the text content of a specified child node of an HTML element.
If the text content cannot be converted to a floating point number, returns 0.

| Function | Type |
| ---------- | ---------- |
| `getChildNodeFloat` | `(element: HTMLElement, index: number) => number` |

Parameters:

* `element`: - The HTML element containing the child node.
* `index`: - The index of the child node whose text content to retrieve.


### :gear: getChildNodeInt

Retrieves the integer value of the text content of a specified child node of an HTML element.
If the text content cannot be converted to an integer, returns 0.

| Function | Type |
| ---------- | ---------- |
| `getChildNodeInt` | `(element: HTMLElement, index: number) => number` |

Parameters:

* `element`: - The HTML element containing the child node.
* `index`: - The index of the child node whose text content to retrieve.
// eslint-disable-next-line max-len


### :gear: getChildNodeText

Retrieves the text content of a child node of the given element at the specified index.

| Function | Type |
| ---------- | ---------- |
| `getChildNodeText` | `(element: HTMLElement, index: number) => string` |

Parameters:

* `element`: The parent element from which to retrieve the child node.
* `index`: The index of the child node to retrieve.


### :gear: getMetadata

Retrieves the content of a specified metadata tag from the document head.

| Function | Type |
| ---------- | ---------- |
| `getMetadata` | `(value: string, doc?: Document) => string` |

Parameters:

* `value`: - The name or property attribute value of the metadata tag.
* `doc`: - The document to search for the metadata tag (default is the current document).


Examples:

Example 1:
Assuming <meta name="description" content="This is a sample description."> exists in the document head.
const metaContent = getMetadata('description');
console.log(metaContent);
Output: 'This is a sample description.'
Example 2:
Assuming <meta property="og:title" content="Open Graph Title"> exists in the document head.
const metaContent = getMetadata('og:title', document);
console.log(metaContent);
Output: 'Open Graph Title'


### :gear: replaceBySpecifier

Replaces occurrences of a specified specifier in a string with an HTML tag.

| Function | Type |
| ---------- | ---------- |
| `replaceBySpecifier` | `({ input, specifier, htmlTag }: ReplaceBySpecifier) => string` |

Parameters:

* `param`: - An object containing input string, specifier, and HTML tag.
* `param.input`: - The input string where replacements will be made.
* `param.specifier`: - The specifier string to search for in the input.
* `param.htmlTag`: - The HTML tag to wrap around the parts matched by the specifier.


Examples:

// Example 1:
 const result1 = replaceBySpecifier({
   input: 'This is a test string with some test keywords.',
   specifier: 'test',
   htmlTag: 'strong'
 });
 console.log(result1);
 // Output: 'This is a <strong> string with some </strong> keywords.'

 // Example 2:
 const result2 = replaceBySpecifier({
   input: 'Hello, world!',
   specifier: ',',
   htmlTag: 'span'
 });
 console.log(result2);
 // Output: 'Hello<span> world!</span>'


### :gear: toCamelCase

Sanitizes a string for use as a JavaScript property name.

| Function | Type |
| ---------- | ---------- |
| `toCamelCase` | `(name: string) => string` |

Parameters:

* `name`: - The unsanitized string.


Examples:

// Example usage:
const unsanitizedString = 'background-color';
const camelCasedName = toCamelCase(unsanitizedString);
console.log(camelCasedName); // Output: 'backgroundColor'


### :gear: toClassName

Converts a string into a valid CSS class name.

| Function | Type |
| ---------- | ---------- |
| `toClassName` | `(name: string) => string` |

Parameters:

* `name`: - The string to convert into a CSS class name.


Examples:

// Example usage:
const inputString = 'Hello, World!';
const cssClassName = toClassName(inputString);
console.log(cssClassName); // Output: 'hello-world'


### :gear: undefinedOnEmpty

Returns undefined if the value is an empty string, otherwise returns the value itself.

| Function | Type |
| ---------- | ---------- |
| `undefinedOnEmpty` | `(value: string) => string or undefined` |

Parameters:

* `value`: - The value to check.


Examples:

// Example usage:
const emptyValue = '';
const nonEmptyValue = 'Hello, World!';

const result1 = undefinedOnEmpty(emptyValue);
console.log(result1); // Output: undefined

const result2 = undefinedOnEmpty(nonEmptyValue);
console.log(result2); // Output: 'Hello, World!'


### :gear: wrap

Wraps an HTML element with another HTML element.

| Function | Type |
| ---------- | ---------- |
| `wrap` | `(element: HTMLElement, wrapper: HTMLElement) => void` |

Parameters:

* `element`: - The HTML element to wrap.
* `wrapper`: - The HTML element to use as a wrapper.


Examples:

// Example usage:
const elementToWrap = document.getElementById('element-to-wrap');
const wrapperElement = document.createElement('div');

wrap(elementToWrap, wrapperElement);



## :factory: RuntimeCache

### Methods

- [get](#gear-get)
- [set](#gear-set)
- [has](#gear-has)
- [delete](#gear-delete)

#### :gear: get

| Method | Type |
| ---------- | ---------- |
| `get` | `<T>(key: string) => T or undefined` |

#### :gear: set

| Method | Type |
| ---------- | ---------- |
| `set` | `<T>(key: string, value: T) => void` |

#### :gear: has

| Method | Type |
| ---------- | ---------- |
| `has` | `(key: string) => boolean` |

#### :gear: delete

| Method | Type |
| ---------- | ---------- |
| `delete` | `(key: string) => void` |


## :tropical_drink: Interfaces

- [CreateOptimizedPictureArgs](#gear-createoptimizedpictureargs)

### :gear: CreateOptimizedPictureArgs

Represents the arguments for creating an optimized picture element.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `src` | `string` |  |
| `alt` | `string` |  |
| `width` | `number` |  |
| `height` | `number` |  |
| `eager` | `boolean or undefined` |  |
| `breakpoints` | `BreakPoint[] or undefined` |  |



</details>

