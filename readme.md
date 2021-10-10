# x-marked ![GitHub Actions Status](https://github.com/1000ch/x-marked/workflows/test/badge.svg)

> Web Components which renders markdown using [marked](https://github.com/markedjs/marked).

## Install

Using [npm](https://www.npmjs.org/package/x-marked):

```sh
$ npm install x-marked
```

## Usage

Import `XMarked` and register it as a custom element.

```html
<script type="module">
import XMarked from 'https://unpkg.com/x-marked';

customElements.define('x-marked', XMarked);
</script>
```

Put `<x-marked>`.

```html
<x-marked>
# x-marked

Web Components which renders markdown using [marked](https://github.com/markedjs/marked).
</x-marked>
```

## API

### `highlight` attribute/property

Boolean attribute/property to enable highlight.

### `highlight-theme`/`highlightTheme` attribute/property

String attribute/property to specify the theme of syntax highlight. you can specify it by choosing from [PrismJS/prism-themes](https://github.com/PrismJS/prism-themes/tree/master/themes) without `.css` extension.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
