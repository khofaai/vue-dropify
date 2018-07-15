## vue-dropify

[![npm](https://img.shields.io/npm/v/vue-dropify.svg)](https://www.npmjs.com/package/vue-dropify) ![license](https://img.shields.io/github/license/khofaai/vue-dropify.svg) [![Build Status](https://travis-ci.org/khofaai/vue-dropify.svg?branch=master)](https://travis-ci.org/khofaai/vue-dropify) [![npm](https://img.shields.io/npm/dw/vue-dropify.svg)](https://www.npmjs.com/package/vue-dropify) [![npm](https://img.shields.io/npm/dt/vue-dropify.svg)](https://www.npmjs.com/package/vue-dropify) 

## Description

Dropify build for vuejs framework

**vue-dropify** package links :
- <a href="https://www.npmjs.com/package/vue-dropify" target="_blank">npm</a>
- <a href="https://yarnpkg.com/en/package/vue-dropify" target="_blank">yarn</a>

## Getting Started

This packages still in dev mode

## Installing

npm installation :

```
npm i vue-dropify
```

yarn installation :

```
yarn add vue-dropify
```

## Usage

```javascript

require('vue-dropify/dist/vue-dropify.css');
import vueDropify from 'vue-dropify';

export default {
	components:{
		'vue-dropify':vueDropify
	}
}
```

## Attributes

- **_full_** : `Boolean // By default false. this attribute define if dopify zone is full width`
- **_size_** : `String/Array // By default null. [minSize,maxSize] or 'maxSize'`
- **_unit_** : `String // By default 'kb' all posibilities are : ['b'(bytes),'kb'(kilobytes),'mb'(megabytes)] `
- **_width_** : `String // Width of dropify zone`
- **_height_** : `String // Height of dropify zone`
- **_accept_** : `String // By default accept image`
- **_message_** : `String // Displayed message when no image is selected`
- **_multiple_** : `Boolean // By default null`

## Actions

- **_upload_** : trigger when image is selected
- **_change_** : when change happen to input file