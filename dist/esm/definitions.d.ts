export declare type DeviceScheme = 'Unknown' | 'Light' | 'Dark';
export interface ColorSchemePlugin {
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
