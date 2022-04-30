import { WebPlugin } from '@capacitor/core';
export class ColorSchemeWeb extends WebPlugin {
    async getScheme(options) {
        const hasPrefer = window.matchMedia('(prefers-color-scheme)');
        if (!hasPrefer.matches)
            return { scheme: (options === null || options === void 0 ? void 0 : options.fallbackScheme) || 'Unknown' };
        const hasDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        return {
            scheme: hasDarkMode.matches ? 'Dark' : 'Light',
        };
    }
    async watchScheme(callback, options) {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', async () => callback(await this.getScheme(options)));
        callback(await this.getScheme(options));
    }
}
//# sourceMappingURL=web.js.map