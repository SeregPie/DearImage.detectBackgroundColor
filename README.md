# DearImage.detectColorScheme

`DearImage.detectColorScheme(image)`

Detects the image background color.

| argument | description |
| ---: | :--- |
| `image` | Everything the function `.loadFrom` supports. |

Returns a promise that resolves to the detected background color.

## dependencies

- [DearImage.detectColorScheme](https://github.com/SeregPie/DearImage.detectColorScheme)

## setup

### npm

```shell
npm i dear-image.detect-background-color
```

### ES module

```javascript
import 'dear-image.detect-background-color';
import DearImage from 'dear-image';
```

### Node

```javascript
require('dear-image.detect-background-color');
let DearImage = require('dear-image');
```

### browser

```html
<script src="https://unpkg.com/dear-image"></script>
<script src="https://unpkg.com/just-my-luck"></script>
<script src="https://unpkg.com/@seregpie/k-means"></script>
<script src="https://unpkg.com/@seregpie/k-means-plus-plus"></script>
<script src="https://unpkg.com/dear-image.detect-color-scheme"></script>
<script src="https://unpkg.com/dear-image.detect-background-color"></script>
```

## usage

```javascript
let backgroundColor = await DearImage.detectBackgroundColor(image);
// => '#1b1b1b'
```
