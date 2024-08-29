import { moveAttributes } from 'Helpers/moveAttributes';

describe('moveAttributes', () => {
  let from: Element;
  let to: Element;

  beforeEach(() => {
    // Create a new element for each test
    from = document.createElement('div');
    to = document.createElement('span');
  });

  it('should move specified attributes from "from" element to "to" element', () => {
    // Set up the "from" element with attributes
    from.setAttribute('data-id', '123');
    from.setAttribute('data-name', 'John Doe');
    from.setAttribute('data-age', '30');

    // Move the specified attributes
    moveAttributes(from, to, ['data-id', 'data-name']);

    // Check if the attributes are moved correctly
    expect(to.getAttribute('data-id')).toBe('123');
    expect(to.getAttribute('data-name')).toBe('John Doe');
    expect(to.getAttribute('data-age')).toBeNull();
  });

  it('should not move attributes that are not specified', () => {
    // Set up the "from" element with attributes
    from.setAttribute('data-id', '123');
    from.setAttribute('data-name', 'John Doe');
    from.setAttribute('data-age', '30');

    // Move only the specified attributes
    moveAttributes(from, to, ['data-id']);

    // Check if the specified attribute is moved and the others are not
    expect(to.getAttribute('data-id')).toBe('123');
    expect(to.getAttribute('data-name')).toBeNull();
    expect(to.getAttribute('data-age')).toBeNull();
  });

  it('should not throw an error if the "from" element does not have the specified attributes', () => {
    // Move attributes from an empty "from" element
    moveAttributes(from, to, ['data-id', 'data-name']);

    // Check if the attributes are not moved and no error is thrown
    expect(to.getAttribute('data-id')).toBeNull();
    expect(to.getAttribute('data-name')).toBeNull();
  });
});
