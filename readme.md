<p align="center">
	<h1>Kh-dropify</h1>
  	<a href="https://www.npmjs.com/package/kh-dropify" target="_blank"><img src="https://img.shields.io/badge/kh--dropify-dev(beta)-orange.svg" alt="Build Status"></a>
  	<a href="https://www.npmjs.com/package/kh-dropify" target="_blank"><img src="https://img.shields.io/badge/npm-v0.1.0-orange.svg" alt="Coverage Status"></a>
  	<a href="https://www.npmjs.com/package/kh-dropify" target="_blank"><img src="https://img.shields.io/badge/licence-mit-green.svg" alt="Coverage Status"></a>
  	<br>
</p>

dropify build for vuejs framework

npm link  : <a href="https://www.npmjs.com/package/kh-dropify" target="_blank">kh-dropify</a> <br>
yarn link : <a href="https://yarnpkg.com/en/package/kh-dropify" target="_blank">kh-dropify</a>

## Getting Started

this packages still in dev mode

## Installing

as all npm packages : 

```
npm i kh-dropify
```

as all yarn packages : 

```
yarn add kh-dropify
```

## Usage

```javascript
import KhDropify from 'kh-dropify';
export default {
	components:{
		'kh-dropify':KhDropify
	}
}
```

## Attributes

- **_full_** : Boolean // by default false. this attribute define if dopify zone is full width
- **_message_** : String // displayed message when no image is selected
- **_height_** : String // height of dropify zone
- **_width_** : String // width of dropify zone
- **_accept_** : String // by default accept image

## Actions

- **_upload_** : ..
- **_change_** : ..