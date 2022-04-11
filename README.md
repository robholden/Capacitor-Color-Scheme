# capacitor-plugin-color-scheme

A plugin for Android to detect and watch for system theme changes. Currently the WebView does not populate the `prefers-color-scheme` property with their system dark mode.

## TODO: Install

```bash
npm install capacitor-plugin-color-scheme
npx cap sync
```

## Example

```typescript
// Set current theme
const result = await ColorScheme.getScheme({ fallbackScheme: 'Dark' });
changeTheme(result.scheme === 'Dark');

// Or, watch for theme changes
ColorScheme.watchScheme((theme: { scheme: DeviceScheme }) => changeTheme(theme === 'Dark'), { fallbackScheme: 'Dark');

// Function to apply theme
function changeTheme(darkMode: boolean) {
    const html = document.getElementsByTagName('html')[0];
    html.classList.remove('dark', 'light');
    html.classList.add(darkMode ? 'dark' : 'light');
}
```

## Android Manifest

Ensure that you have `uiMode` set in `android:configChanges`

```xml
<?xml version='1.0' encoding='utf-8'?>
<manifest ...>
    <application ...>
        <activity android:configChanges="uiMode" ...>
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

## API

<docgen-index>

- [`getScheme(...)`](#getscheme)
- [`watchScheme(...)`](#watchscheme)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getScheme(...)

```typescript
getScheme(options?: { fallbackScheme?: DeviceScheme | undefined; } | undefined) => Promise<{ scheme: DeviceScheme; }>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code>{ fallbackScheme?: <a href="#devicescheme">DeviceScheme</a>; }</code> |

**Returns:** <code>Promise&lt;{ scheme: <a href="#devicescheme">DeviceScheme</a>; }&gt;</code>

---

### watchScheme(...)

```typescript
watchScheme(callback: (result: { scheme: DeviceScheme; }) => any, options?: { fallbackScheme?: DeviceScheme | undefined; } | undefined) => Promise<void>
```

| Param          | Type                                                                                   |
| -------------- | -------------------------------------------------------------------------------------- |
| **`callback`** | <code>(result: { scheme: <a href="#devicescheme">DeviceScheme</a>; }) =&gt; any</code> |
| **`options`**  | <code>{ fallbackScheme?: <a href="#devicescheme">DeviceScheme</a>; }</code>            |

---

### Type Aliases

#### DeviceScheme

<code>'Unknown' | 'Light' | 'Dark'</code>

</docgen-api>
