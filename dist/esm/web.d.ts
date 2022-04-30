import { WebPlugin } from '@capacitor/core';
import { ColorSchemePlugin, DeviceScheme } from './definitions';
export declare class ColorSchemeWeb extends WebPlugin implements ColorSchemePlugin {
    getScheme(options?: {
        fallbackScheme?: DeviceScheme;
    }): Promise<{
        scheme: DeviceScheme;
    }>;
    watchScheme(callback: (result: {
        scheme: DeviceScheme;
    }) => any, options?: {
        fallbackScheme?: DeviceScheme;
    }): Promise<void>;
}
