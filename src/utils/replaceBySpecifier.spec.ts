import { replaceBySpecifier } from 'Utils/replaceBySpecifier';

describe('replaceBySpecifier', () => {
  let input: string;
  let specifier: string;
  let htmlTag: string;

  beforeAll(() => {
    input = 'This is a ::: string with some ::: keywords.';
    specifier = ':::';
    htmlTag = 'strong';
  });

  test('replaces occurrences of a specified specifier with an HTML tag', () => {
    const expectedOutput = 'This is a <strong> string with some </strong> keywords.';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(expectedOutput);
  });

  test('replaces occurrences of a specified specifier with an HTML tag', () => {
    const expectedOutput = 'This is a <strong> string with some </strong> keywords.';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(expectedOutput);
  });

  test('replaces multiple occurrences of a specified specifier with an HTML tag', () => {
    input += ' Another ::: string.';
    const expectedOutput = 'This is a <strong> string with some </strong> keywords. Another <strong> string.</strong>';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(expectedOutput);
  });

  test('replaces occurrences of a different specifier with an HTML tag', () => {
    input = 'Hello, world!';
    specifier = ',';
    htmlTag = 'span';
    const expectedOutput = 'Hello<span> world!</span>';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(expectedOutput);
  });

  test('handles empty input string', () => {
    input = '';
    const expectedOutput = '';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(expectedOutput);
  });

  test('handles empty specifier by returning input', () => {
    specifier = '';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(input);
  });

  test('handles empty HTML tag by returning input', () => {
    htmlTag = '';
    const result = replaceBySpecifier({ input, specifier, htmlTag });
    expect(result).toBe(input);
  });
});
