# `<x-marked>`

> Web Components which renders markdown using [marked](https://github.com/markedjs/marked).

[![Build Status](https://travis-ci.org/1000ch/x-marked.svg?branch=master)](https://travis-ci.org/1000ch/x-marked)
[![NPM version](https://badge.fury.io/js/x-marked.svg)](http://badge.fury.io/js/x-marked)
[![devDependency Status](https://david-dm.org/1000ch/x-marked/dev-status.svg)](https://david-dm.org/1000ch/x-marked?type=dev)

## Install

Using [npm](https://www.npmjs.org/package/x-marked):

```sh
$ npm install x-marked
```

## Usage

Import `XMarked` and register it as a custom element.

```html
<script type="module">
import XMarked from 'https://unpkg.com/x-marked/dist/index.js';
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

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
