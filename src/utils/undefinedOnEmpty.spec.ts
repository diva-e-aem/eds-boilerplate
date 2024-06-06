import { undefinedOnEmpty } from 'Utils/undefinedOnEmpty';

describe('undefinedOnEmpty', () => {
  test('returns undefined for an empty string', () => {
    const emptyValue = '';
    const result = undefinedOnEmpty(emptyValue);
    expect(result).toBeUndefined();
  });

  test('returns the value itself for a non-empty string', () => {
    const nonEmptyValue = 'Hello, World!';
    const result = undefinedOnEmpty(nonEmptyValue);
    expect(result).toBe(nonEmptyValue);
  });

  test('handles whitespace strings', () => {
    const whitespaceValue = '   ';
    const result = undefinedOnEmpty(whitespaceValue);
    expect(result).toBeUndefined();
  });

  test('handles strings with whitespace characters', () => {
    const stringWithWhitespace = '   Hello, World!   ';
    const result = undefinedOnEmpty(stringWithWhitespace);
    expect(result).toBe(stringWithWhitespace);
  });
});
