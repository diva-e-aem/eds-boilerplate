import { getChildNodeText } from 'Utils/getChildNodeText';

describe('getChildNodeText', () => {
  let mockElement: HTMLDivElement | null;

  beforeEach(() => {
    mockElement = document.createElement('div');
    mockElement.innerHTML = `
      <span>  Text Content  </span>
      <span>Another Text</span>
      <span></span>
    `;
  });

  test('returns text content of child node trimmed of leading and trailing whitespace', () => {
    const result = getChildNodeText(mockElement!, 0);
    expect(result).toBe('Text Content');
  });

  test('returns empty string if child node is empty', () => {
    const result = getChildNodeText(mockElement!, 2);
    expect(result).toBe('');
  });

  afterEach(() => {
    mockElement = null;
  });
});
