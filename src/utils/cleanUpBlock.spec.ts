import { cleanUpBlock } from 'Utils/cleanUpBlock';

describe('cleanUpBlock', () => {
  let block: HTMLDivElement;

  beforeEach(() => {
    block = document.createElement('div');
    block.innerHTML = '<p>Test content</p>';
    block.style.display = 'block';

    document.body.appendChild(block);
  });

  afterEach(() => {
    document.body.removeChild(block);
  });

  it('should remove inner HTML content', () => {
    cleanUpBlock(block);

    expect(block.innerHTML).toBe('');
  });

  it('should reset display property', () => {
    cleanUpBlock(block);

    expect(block.style.display).toBe('');
  });
});
