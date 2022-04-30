var capacitorColorScheme = (function (exports, core) {
    'use strict';

    const ColorScheme = core.registerPlugin('ColorScheme', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ColorSchemeWeb()),
        ios: () => Promise.resolve().then(function () { return web; }).then(m => new m.ColorSchemeWeb()),
    });

    class ColorSchemeWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ColorSchemeWeb: ColorSchemeWeb
    });

    exports.ColorScheme = ColorScheme;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
