import { WebPlugin } from '@capacitor/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ColorSchemePlugin, DeviceScheme } from './definitions';

export class ColorSchemeWeb extends WebPlugin implements ColorSchemePlugin {
  async getScheme(options?: {
    fallbackScheme?: DeviceScheme;
  }): Promise<{ scheme: DeviceScheme }> {
    const hasPrefer = window.matchMedia('(prefers-color-scheme)');
    if (!hasPrefer.matches)
      return { scheme: options?.fallbackScheme || 'Unknown' };

    const hasDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    return {
      scheme: hasDarkMode.matches ? 'Dark' : 'Light',
    };
  }

  async watchScheme(
    callback: (result: { scheme: DeviceScheme }) => any,
    options?: {
      fallbackScheme?: DeviceScheme;
    },
  ): Promise<void> {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', async () =>
      callback(await this.getScheme(options)),
    );
    callback(await this.getScheme(options));
  }
}
