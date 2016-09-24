(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["countdown"] = factory();
	else
		root["countdown"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by kelvinsun on 2016/9/24.
	 */
	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by kelvinsun on 2016/9/24.
	 */
	'use strict';

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var Countdown = (function () {
	    function Countdown(_ref) {
	        var _this = this;

	        var endTime = _ref.endTime;
	        var onTick = _ref.onTick;
	        var onComplete = _ref.onComplete;

	        _classCallCheck(this, Countdown);

	        this.endTime = endTime;
	        this.interval = 0;

	        var tick = function tick() {
	            if (Date.now() >= endTime) {
	                clearInterval(_this.interval);
	                _this.interval = 0;
	                'function' === typeof onComplete && onComplete();
	            } else {
	                'function' === typeof onTick && onTick();
	            }
	        };

	        if (Date.now() < endTime) {
	            this.interval = this.setInterval(tick, 1000);
	        }
	    }

	    _createClass(Countdown, [{
	        key: 'abort',
	        value: function abort() {
	            if (!!this.interval) {
	                clearInterval(this.interval);
	                this.interval = 0;
	            }
	        }
	    }, {
	        key: 'getRemaining',
	        value: function getRemaining() {
	            return this.endTime ? this.endTime - Date.now() : 0;
	        }
	    }]);

	    return Countdown;
	})();

	module.exports = Countdown;

/***/ }
/******/ ])
});
;