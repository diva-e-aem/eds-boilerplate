/**
 * Removes the display property from the section
 * @param section - The section to show
 */
export function showSection(section: HTMLElement) {
  section.style.removeProperty('display');
}
