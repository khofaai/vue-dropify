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
| **_full_**        | false     |  `Boolean // this attribute define if dopify zone is full width` |
| **_size_**        | null      |  `String/Array // [minSize,maxSize] or 'maxSize'` |
| **_unit_**        | 'bk'      |  `String // Options are : ['b'(bytes),'kb'(kilobytes),'mb'(megabytes)] ` |
| **_width_**       | 'auto'    |  `String // Width of dropify zone` |
| **_height_**      | ''        |  `String // Height of dropify zone` |
| **_accept_**      | 'image/*' |  `String // The same option as <input type="file" />` |
| **_message_**     | null      |  `String // Displayed message when no image is selected` |
| **_multiple_**    | null      |  `Boolean // To enable multiple file upload` |
| **_uploadIcon_**  | ''        |  `String // Icon className` |

## Actions

| name          | description |
|----           |----         |
| **_@upload_** | trigger when image is selected |
| **_@change_** | when change happen to input file |