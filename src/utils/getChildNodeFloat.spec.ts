import { getChildNodeFloat } from 'Utils/getChildNodeFloat';

describe('getChildNodeFloat', () => {
  let mockElement: HTMLDivElement | null;

  beforeEach(() => {
    mockElement = document.createElement('div');
    mockElement.innerHTML = `
      <span>123.45</span>
      <span>456.78</span>
      <span>abc</span>
    `;
  });

  test('returns floating point value of child node text content', () => {
    const result = getChildNodeFloat(mockElement!, 0);
    expect(result).toBeCloseTo(123.45);
  });

  test('returns 0 if child node text content cannot be converted to floating point number', () => {
    const result = getChildNodeFloat(mockElement!, 2);
    expect(result).toBe(0);
  });

  afterEach(() => {
    mockElement = null;
  });
});
