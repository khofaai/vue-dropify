## vue-dropify

[![npm](https://img.shields.io/npm/v/vue-dropify.svg)](https://www.npmjs.com/package/vue-dropify) ![license](https://img.shields.io/github/license/khofaai/vue-dropify.svg) [![Build Status](https://travis-ci.org/khofaai/vue-dropify.svg?branch=master)](https://travis-ci.org/khofaai/vue-dropify) [![npm](https://img.shields.io/npm/dw/vue-dropify.svg)](https://www.npmjs.com/package/vue-dropify) [![npm](https://img.shields.io/npm/dt/vue-dropify.svg)](https://www.npmjs.com/package/vue-dropify)

## Description

Dropify build for vuejs framework

**vue-dropify** package links :
- <a href="https://www.npmjs.com/package/vue-dropify" target="_blank">npm</a>
- <a href="https://yarnpkg.com/en/package/vue-dropify" target="_blank">yarn</a>

## Getting Started

_This packages still in Dev mode_

`vue-dropify` helps you to upload files with a simple pre-visual display.

## Installing

```bash
npm i vue-dropify
```
```bash
yarn add vue-dropify
```

## Usage

```javascript
import VueDropify from 'vue-dropify';

export default {
  components: {
    'vue-dropify': VueDropify
  }
}
```

## Attributes

| name              | default   | description |
|----               |----       |----         |
| **src**           | null      |  `String // image format: base64` |
| **full**          | false     |  `Boolean // this attribute define if dopify zone is full width` |
| **size**          | null      |  `String/Array // [minSize,maxSize] or 'maxSize'` |
| **unit**          | 'kb'      |  `String // Options are : ['b'(bytes),'kb'(kilobytes),'mb'(megabytes)] ` |
| **width**         | 'auto'    |  `String // Width of dropify zone` |
| **height**        | ''        |  `String // Height of dropify zone` |
| **dimensions**    | null      |  `Object // { width, height } for wanted image dimensions` |
| **accept**        | 'image/*' |  `String // The same option as <input type="file" />` |
| **message**       | null      |  `String // Displayed message when no image is selected` |
| **multiple**      | null      |  `Boolean // To enable multiple file upload` |
| **uploadIcon**    | ''        |  `String // Icon className` |
| **removeIcon**    | null      |  `String // Icon className` |

## Actions

> vue-dropify >= 0.6.0 support `v-model` directive

| name          | description |
|----           |----         |
| _@deprecated_ **_@upload_** | trigger when image is selected |
| **@change** | when change happen to input file |
