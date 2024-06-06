import { DebuggerService } from '@kluntje/services';

import { getLocation } from 'Helpers/sidekick/getLocation';

import { loadCSS } from './loadCSS';
import { config } from '../../../config';

export async function loadFonts(): Promise<void> {
  const { fontsCssPath } = config;
  if (!fontsCssPath) return;
  await loadCSS(fontsCssPath);
  try {
    if (!getLocation().hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (error) {
    DebuggerService.error('loadFonts: Error setting fonts-loaded in session storage', error);
  }
}
