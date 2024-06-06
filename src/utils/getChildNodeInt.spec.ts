import { getChildNodeInt } from 'Utils/getChildNodeInt'; // Replace 'yourFileName' with the actual file path

describe('getChildNodeInt', () => {
  let mockElement: HTMLDivElement | null;

  beforeEach(() => {
    mockElement = document.createElement('div');
    mockElement.innerHTML = `
      <span>123</span>
      <span>456</span>
      <span>abc</span>
      <span>789</span>
    `;
  });

  test('returns integer value of child node text content', () => {
    const result = getChildNodeInt(mockElement!, 1);
    expect(result).toBe(456);
  });

  test('returns 0 if child node text content cannot be converted to integer', () => {
    const result = getChildNodeInt(mockElement!, 2);
    expect(result).toBe(0);
  });

  afterEach(() => {
    mockElement = null;
  });
});
