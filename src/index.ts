import { registerPlugin } from '@capacitor/core';

import type { ColorSchemePlugin } from './definitions';

const ColorScheme = registerPlugin<ColorSchemePlugin>('ColorScheme', {
  web: () => import('./web').then(m => new m.ColorSchemeWeb()),
  ios: () => import('./web').then(m => new m.ColorSchemeWeb()),
});

export * from './definitions';
export { ColorScheme };
