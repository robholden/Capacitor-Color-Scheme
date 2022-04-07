# capacitor-plugin-color-scheme

Detect the device's color scheme

## Install

```bash
npm install capacitor-plugin-color-scheme
npx cap sync
```

## API

<docgen-index>

* [`getScheme(...)`](#getscheme)
* [`watchScheme(...)`](#watchscheme)
* [Type Aliases](#type-aliases)

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

--------------------


### watchScheme(...)

```typescript
watchScheme(callback: (result: { scheme: DeviceScheme; }) => any, options?: { fallbackScheme?: DeviceScheme | undefined; } | undefined) => Promise<void>
```

| Param          | Type                                                                                   |
| -------------- | -------------------------------------------------------------------------------------- |
| **`callback`** | <code>(result: { scheme: <a href="#devicescheme">DeviceScheme</a>; }) =&gt; any</code> |
| **`options`**  | <code>{ fallbackScheme?: <a href="#devicescheme">DeviceScheme</a>; }</code>            |

--------------------


### Type Aliases


#### DeviceScheme

<code>'Unknown' | 'Light' | 'Dark'</code>

</docgen-api>
