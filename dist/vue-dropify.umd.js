(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-dropify"] = factory();
	else
		root["vue-dropify"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/var/www/js-projects/vuejs-packages/node_modules/.cache/vue-loader","cacheIdentifier":"02bea4b2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-dropify/src/Dropify.vue?vue&type=template&id=64b964fa
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropzone-area",class:{
		'hovered': _vm.hovering,
		'full': _vm.full
	},style:({
		'height': _vm.height,
		'width': _vm.width
	}),on:{"dragenter":function($event){_vm.hovering = true},"dragleave":function($event){_vm.hovering = false}}},[(!_vm.loading)?[_c('input',{style:({
					'height': _vm.height,
					'width': '100%'
				}),attrs:{"id":"file_input","type":"file","accept":_vm.accept,"multiple":_vm.isMultiple},on:{"change":_vm.onFilesUpload}})]:_vm._e(),_c('div',{staticClass:"dropzone-message"},[_c('span',{staticClass:"file-icon zmdi zmdi-cloud-upload"}),(_vm.images.length == 0)?_c('p',[_vm._v("\n\t\t\t\t"+_vm._s(_vm.dropify_message)+"\n\t\t\t")]):_vm._e()]),_c('div',{staticClass:"dropzone-preview",class:{ 'on': _vm.images.length > 0 },staticStyle:{"text-align":"center"}},_vm._l((_vm.images),function(image,i){return (_vm.images.length > 0)?_c('div',{staticClass:"dropzone-img",style:({
						'height': _vm.height,
						'width': _vm.width/_vm.images.length
					})},[_c('span',{on:{"click":function($event){_vm.removeImage(i)}}},[_vm._v("remove")]),_c('img',{attrs:{"src":image}})]):_vm._e()})),(!_vm.loading)?[(_vm.images.length > 1)?_c('button',{staticClass:"dropzone-remove",attrs:{"type":"button"},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.removeImageAll($event)}}},[_vm._v("\n\t\t\t\t\tremove all\n\t\t\t")]):_vm._e()]:_c('i',{staticClass:"el-icon-loading",staticStyle:{"font-size":"24px","position":"absolute","top":"45%","left":"45%","font-weight":"bold","color":"#5d56f9"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-dropify/src/Dropify.vue?vue&type=template&id=64b964fa

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-dropify/src/Dropify.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Dropifyvue_type_script_lang_js = ({
  name: 'Dropify',
  props: {
    full: {
      default: false
    },
    message: {
      default: null
    },
    height: {
      default: ''
    },
    width: {
      default: 'auto'
    },
    loading: {
      default: false
    },
    accept: {
      default: 'image/*'
    },
    multiple: {
      default: null
    },
    size: {
      default: null
    },
    unit: {
      default: null
    }
  },
  data: function data() {
    return {
      images: [],
      sizeUnit: 'kb',
      maxSize: null,
      hovering: false,
      isMultiple: false,
      dropify_message: 'Drop image here or click to select',
      sizeValues: {
        b: 1,
        kb: 1024,
        mb: 1024 * 1024
      }
    };
  },
  methods: {
    onFilesUpload: function onFilesUpload(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files);
      this.$emit('upload', files);
      this.$emit('change');
    },
    createImage: function createImage(files) {
      var _this = this;

      for (var i = 0; i < files.length; i++) {
        var reader = new FileReader();

        if (this.checkFileSize(files[i])) {
          reader.onload = function (e) {
            _this.images.push(e.target.result);
          };

          reader.readAsDataURL(files[i]);
        }
      }
    },
    checkFileSize: function checkFileSize(file) {
      var _this2 = this;

      var convertSize = function convertSize(size) {
        return size * _this2.sizeValues[_this2.sizeUnit];
      };

      if (typeof this.maxSize === 'array' && this.maxSize.length == 2) {
        var minSize = convertSize(maxSize[0]);
        var maxSize = convertSize(maxSize[1]);
        return file.size >= minSize && file.size <= maxSize;
      } else if (this.maxSize !== null) {
        return file.size <= this.maxSize * this.sizeValues[this.sizeUnit];
      }

      return true;
    },
    removeImage: function removeImage(position) {
      this.images.splice(position, 1);
      this.$emit('upload', this.images);
    },
    removeImageAll: function removeImageAll(e) {
      this.images = [];
      this.$emit('upload', '');
    },
    initMessage: function initMessage() {
      if (typeof this.message !== 'undefined' && this.message != null) {
        this.dropify_message = this.message;
      }
    },
    setMultiple: function setMultiple() {
      if (this.multiple !== null && this.multiple !== false) {
        this.isMultiple = true;
      } else {
        this.isMultiple = false;
      }
    },
    setMaxSize: function setMaxSize() {
      if (this.size !== null) {
        this.maxSize = this.size;
      }
    },
    setSizeUnit: function setSizeUnit() {
      if (typeof this.sizeValues[this.unit] !== 'undefined') {
        this.sizeUnit = this.unit;
      }
    }
  },
  mounted: function mounted() {
    this.initMessage();
    this.setMultiple();
    this.setMaxSize();
    this.setSizeUnit();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-dropify/src/Dropify.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Dropifyvue_type_script_lang_js = (Dropifyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-dropify/src/Dropify.vue?vue&type=style&index=0&lang=css
var Dropifyvue_type_style_index_0_lang_css = __webpack_require__("y2Hl");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/vue-dropify/src/Dropify.vue






/* normalize component */

var component = normalizeComponent(
  src_Dropifyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dropify = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Dropify);



/***/ }),

/***/ "8F/j":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "y2Hl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dropify_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8F/j");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dropify_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dropify_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dropify_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-dropify.umd.js.map