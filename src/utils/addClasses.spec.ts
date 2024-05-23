import { addClasses } from 'Utils/addClasses';
import * as toClassNameModule from 'Utils/toClassName';

describe('addClasses', () => {
  let element: HTMLElement;
  const testClass = 'test';
  const anotherTestClass = 'another-test';
  const lastTestClass = 'last-test';
  const classesToAdd = `${testClass}, ${anotherTestClass}, ${lastTestClass}`;
  const toClassName = jest.fn<string, [string]>((value) => value);

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    jest.clearAllMocks();
  });

  test('adds classes to an HTML element', () => {
    jest.spyOn(toClassNameModule, 'toClassName').mockImplementation(toClassName);
    addClasses(element, classesToAdd);

    const classes = element.classList;
    expect(classes.contains(testClass)).toBe(true);
    expect(classes.contains(anotherTestClass)).toBe(true);
    expect(classes.contains(lastTestClass)).toBe(true);
  });

  test('calls toClassesName for each test class ', () => {
    jest.spyOn(toClassNameModule, 'toClassName').mockImplementation(toClassName);
    addClasses(element, classesToAdd);

    expect(toClassName).toHaveBeenCalledTimes(3);
    expect(toClassName).toHaveBeenCalledWith(testClass);
    expect(toClassName).toHaveBeenCalledWith(anotherTestClass);
    expect(toClassName).toHaveBeenCalledWith(lastTestClass);
  });
});
