import { toClassName } from 'Utils/toClassName';

describe('toClassName', () => {
  test('converts a string to lowercase and replaces non-alphanumeric characters with dashes', () => {
    const inputString = 'Hello, World!';
    const expected = 'hello-world';
    const result = toClassName(inputString);
    expect(result).toBe(expected);
  });

  test('handles special characters and spaces correctly', () => {
    const inputString = '!@#$%^&*()_+123 Hello, World!';
    const expected = '123-hello-world';
    const result = toClassName(inputString);
    expect(result).toBe(expected);
  });

  test('handles leading and trailing dashes correctly', () => {
    const inputString = '  leading-and-trailing-dashes  ';
    const expected = 'leading-and-trailing-dashes';
    const result = toClassName(inputString);
    expect(result).toBe(expected);
  });

  test('handles consecutive dashes correctly', () => {
    const inputString = 'consecutive---dashes';
    const expected = 'consecutive-dashes';
    const result = toClassName(inputString);
    expect(result).toBe(expected);
  });

  test('handles empty string', () => {
    const inputString = '';
    const expected = '';
    const result = toClassName(inputString);
    expect(result).toBe(expected);
  });

  test('handles strings with only non-alphanumeric characters', () => {
    const inputString = '!@#$%^&*()_+';
    const expected = '';
    const result = toClassName(inputString);
    expect(result).toBe(expected);
  });
});
