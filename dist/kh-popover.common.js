module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "cLHT");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+m50":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "08fy":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "0n62":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "1m5z":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("Vms5");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "3v3+":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("m85N");
var createDesc = __webpack_require__("78L8");
module.exports = __webpack_require__("tLSE") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "78L8":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "7R41":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "8fU/":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9dS6":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "BDXC":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("08fy");
var core = __webpack_require__("9dS6");
var hide = __webpack_require__("3v3+");
var redefine = __webpack_require__("QaqQ");
var ctx = __webpack_require__("wR43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "CinE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("BDXC");
var $indexOf = __webpack_require__("j6lb")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("JYM+")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "ED4D":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "JK6u":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ED4D");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "JYM+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("WAmR");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "Lj38":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("8fU/");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "Q7Hd":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("ED4D");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "QaqQ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("08fy");
var hide = __webpack_require__("3v3+");
var has = __webpack_require__("WI/M");
var SRC = __webpack_require__("RMtB")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("9dS6").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "Qi1J":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8fU/");
var document = __webpack_require__("08fy").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "RMtB":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "Vms5":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "WAmR":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "WI/M":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "a8CR":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "cLHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("a8CR");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/anas/Documents/__HELPERS__/js/Popover/node_modules/.cache/vue-loader","cacheIdentifier":"02bea4b2-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/Popover.vue?vue&type=template&id=059a70a0
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popover-wrapper",class:_vm.randUser,on:{"mouseleave":function($event){_vm.triggerHover(false)},"mouseover":function($event){_vm.triggerHover(true)}}},[_c('div',{class:_vm.classPopoverCore()},[(_vm.icon)?_c('div',{staticClass:"avatar-slot",on:{"click":_vm.setClickPopoverPosition,"mouseover":_vm.setHoverPopoverPosition}},[_vm._t("avatar",[_c('a',{attrs:{"href":"javascript:;"}},[(_vm.user.photo == '' )?_c('span',{staticClass:"inline-team-avatar radius-all"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.user.avatar)+"\n\t\t\t\t\t")]):_c('img',{staticClass:"inline-team-avatar radius-all",attrs:{"src":_vm.getImage(_vm.user.photo)}})])])],2):_vm._e(),_c('transition',{attrs:{"name":"fade-fast"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"user_popover",class:_vm.rand,style:({'top':_vm.top,'left':_vm.left}),on:{"mouseleave":function($event){_vm.triggerHover(false)},"mouseover":function($event){_vm.triggerHover(true)}}},[_c('span',{staticClass:"popover_header"}),_c('span',{staticClass:"user_popover_arrow bottom",style:({'left':_vm.left_arrow_pos,'top':_vm.top_arrow_pos})}),_vm._t("content",[_c('div',{staticClass:"user_popover_content"},[_c('div',{staticClass:"user_popover_infos"},[_vm._t("content_info",[_c('div',{staticClass:"user_popover_avatar radius-all"},[(_vm.user.photo == '' )?_c('span',{staticClass:"img-circle team-small-avatar"},[_vm._v(_vm._s(_vm.user.avatar))]):_c('img',{staticClass:"team-small-avatar",class:{'img-circle':_vm.checkBase(_vm.user.photo)},attrs:{"src":_vm.getImage(_vm.user.photo)}})]),_c('h4',{staticClass:"user_popover_name"},[_vm._v(_vm._s(_vm.user.name))]),_c('h5',{staticClass:"user_popover_position"},[_vm._v(_vm._s(_vm.user.position))])])],2),_vm._t("content_actions",[(_vm.user.type == 'user' && _vm.user.role_id > 1)?_c('div',{staticClass:"user_popover_actions"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.emitActions('edit')}}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v(" "+_vm._s(_vm.$trans.get('edit'))+"\n\t\t\t\t\t\t\t\t")]),_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.emitActions('activity')}}},[_c('i',{staticClass:"fa fa-eye"}),_vm._v(" "+_vm._s(_vm.$trans.get('activity'))+"\n\t\t\t\t\t\t\t\t")]),_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.emitActions('remove')}}},[_c('i',{staticClass:"fa fa-ban"}),_vm._v(" "+_vm._s(_vm.$trans.get('remove'))+"\n\t\t\t\t\t\t\t\t")])]):(_vm.user.role_id == 1)?_c('div',{staticClass:"user_popover_actions"},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.$trans.get('the owner'))+"\n\t\t\t\t\t\t\t")]):_c('div',{staticClass:"user_popover_actions"},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.user.email)+"\n\t\t\t\t\t\t\t")])])],2)])],2)])],1),(_vm.name)?_c('b',{staticClass:"popover-name",on:{"click":_vm.setClickPopoverPosition,"mouseover":_vm.setHoverPopoverPosition}},[_vm._v(_vm._s(_vm.user.name))]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Popover.vue?vue&type=template&id=059a70a0

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("jmfQ");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("CinE");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/Popover.vue?vue&type=script&lang=js


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
/* harmony default export */ var Popovervue_type_script_lang_js = ({
  name: 'Popover',
  props: {
    user: {
      default: function _default() {
        return {
          id: 0,
          photo: '',
          name: 'user name',
          avatar: 'UN',
          email: 'user@name.knt',
          position: '',
          role_id: 2
        };
      }
    },
    trigger: {
      default: 'hover'
    },
    name: {
      default: false
    },
    icon: {
      default: true
    }
  },
  data: function data() {
    var random = this.str_random();
    return {
      trigger_options: ['hover', 'click'],
      active: false,
      rand: 'popover_' + random,
      randUser: 'kh_popover_' + random,
      top: -500,
      left: -500,
      left_arrow_pos: '',
      top_arrow_pos: '',
      Pwidth: 242,
      unite: 'px',
      calc_marg: 10
    };
  },
  methods: {
    str_random: function str_random() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    },
    setPopoverPosition: function setPopoverPosition() {
      var doc = document;
      var pos = doc.querySelector('.' + this.randUser).getBoundingClientRect();
      var topOffset = doc.documentElement.scrollTop;
      var width = window.outerWidth;
      this.top = parseInt(pos.top + 40 + topOffset) + this.unite;
      var cal_left = parseInt(pos.left - 109);
      var _left = cal_left;
      var cal_right = parseInt(pos.right - 109);
      var _right = cal_right;
      var cal_marg = cal_left;

      if (cal_left + this.Pwidth > width) {
        cal_marg = width - this.Pwidth;
      } else if (cal_right < 0) {
        cal_marg = 0;
      }

      this.left_arrow_pos = parseInt(this.Pwidth / 2 - this.calc_marg + _left - cal_marg) + this.unite;
      this.top_arrow_pos = '-' + this.calc_marg + this.unite;
      this.left = cal_marg + this.unite;
    },
    setClickPopoverPosition: function setClickPopoverPosition() {
      if (this.trigger == 'click') {
        this.setPopoverPosition();
        this.toggle();
      }
    },
    setHoverPopoverPosition: function setHoverPopoverPosition() {
      if (this.trigger == 'hover') {
        this.setPopoverPosition();
      }
    },
    getImage: function getImage(photo) {
      if (typeof baseS3 === 'undefined') {
        window.baseS3 = '/';
      }

      if (this.checkBase(photo)) {
        return baseS3 + this.user.folder + '/' + photo;
      }

      return photo;
    },
    checkBase: function checkBase(photo) {
      if (typeof baseUrl === 'undefined') {
        window.baseUrl = '/';
      }

      return photo.indexOf(baseUrl) == -1;
    },
    triggerHover: function triggerHover(status) {
      if (this.trigger == 'hover') {
        this.active = status;
      }
    },
    toggle: function toggle() {
      if (this.active) {
        return this.hide();
      }

      return this.show();
    },
    show: function show() {
      var _this = this;

      this.active = true;
      setTimeout(function () {
        return document.getElementById('app').addEventListener('click', _this.hide);
      }, 0);
    },
    hide: function hide() {
      this.active = false;
      document.getElementById('app').removeEventListener('click', this.hide);
    },
    emitActions: function emitActions(element) {
      this.$emit('action', {
        action: element,
        name: this.user.name,
        role_id: this.user.role_id,
        user_client_id: this.user.user_client_id
      });
    },
    setClass: function setClass() {
      if (!this.icon) {
        return this.randUser;
      }

      return '';
    },
    classPopoverCore: function classPopoverCore() {
      var _class = typeof this.user.type !== 'undefined' ? this.user.type + ' ' : '';

      if (this.icon) {
        _class += 'kontent-popover inline-team-item';
      }

      return _class;
    }
  },
  mounted: function mounted() {
    var doc = document;
    var userPopover = doc.querySelector('.' + this.rand);
    doc.querySelector('.' + this.rand).outerHtml = '';
    doc.querySelector('body').appendChild(userPopover);
  }
});
// CONCATENATED MODULE: ./src/Popover.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Popovervue_type_script_lang_js = (Popovervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/Popover.vue?vue&type=style&index=0&lang=css
var Popovervue_type_style_index_0_lang_css = __webpack_require__("v7wW");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/Popover.vue






/* normalize component */

var component = normalizeComponent(
  src_Popovervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Popover = (component.exports);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Popover);



/***/ }),

/***/ "fWaf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8fU/");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "j6lb":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("xW7z");
var toLength = __webpack_require__("Q7Hd");
var toAbsoluteIndex = __webpack_require__("JK6u");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "jmfQ":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("m85N").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("tLSE") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "m85N":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fWaf");
var IE8_DOM_DEFINE = __webpack_require__("qXQ5");
var toPrimitive = __webpack_require__("Lj38");
var dP = Object.defineProperty;

exports.f = __webpack_require__("tLSE") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "qXQ5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("tLSE") && !__webpack_require__("WAmR")(function () {
  return Object.defineProperty(__webpack_require__("Qi1J")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "tLSE":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("WAmR")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "v7wW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+m50");
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "wR43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("0n62");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "xW7z":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("1m5z");
var defined = __webpack_require__("7R41");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ })

/******/ })["default"];
//# sourceMappingURL=kh-popover.common.js.map