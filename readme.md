## Kh-dropify

[![npm](https://img.shields.io/npm/v/kh-dropify.svg)](https://www.npmjs.com/package/kh-dropify) ![license](https://img.shields.io/github/license/khofaai/kh-dropify.svg) [![Build Status](https://travis-ci.org/khofaai/kh-dropify.svg?branch=master)](https://travis-ci.org/khofaai/kh-dropify) [![npm](https://img.shields.io/npm/dw/kh-dropify.svg)](https://www.npmjs.com/package/kh-dropify) [![npm](https://img.shields.io/npm/dt/kh-dropify.svg)](https://www.npmjs.com/package/kh-dropify) 

## Description

Dropify build for vuejs framework

**kh-dropify** package links :
- <a href="https://www.npmjs.com/package/kh-dropify" target="_blank">npm</a>
- <a href="https://yarnpkg.com/en/package/kh-dropify" target="_blank">yarn</a>

## Getting Started

This packages still in dev mode

## Installing

npm installation :

```
npm i kh-dropify
```

yarn installation :

```
yarn add kh-dropify
```

## Usage

```javascript

require('kh-dropify/dist/kh-dropify.css');
import khDropify from 'kh-dropify';

export default {
	components:{
		'kh-dropify':khDropify
	}
}
```

## Attributes

- **_full_** : Boolean // by default false. this attribute define if dopify zone is full width
- **_message_** : String // displayed message when no image is selected
- **_height_** : String // height of dropify zone
- **_width_** : String // width of dropify zone
- **_accept_** : String // by default accept image
- **_multiple_** : Boolean // by default null

## Actions

- **_upload_** : trigger when image is selected
- **_change_** : when change happen to input file