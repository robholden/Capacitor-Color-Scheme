import { registerPlugin } from '@capacitor/core';
const ColorScheme = registerPlugin('ColorScheme', {
    web: () => import('./web').then(m => new m.ColorSchemeWeb()),
    ios: () => import('./web').then(m => new m.ColorSchemeWeb()),
});
export * from './definitions';
export { ColorScheme };
//# sourceMappingURL=index.js.map