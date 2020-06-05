(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./packages/observable/dist/index.js":
/*!*******************************************!*\
  !*** ./packages/observable/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = value;
exports.observable = observable;
exports.computed = computed;
exports.subscribe = subscribe;
exports.isObservable = isObservable;
exports.watch = watch;
exports.cleanup = cleanup;

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var tracking;

function value(value) {
  if (value.$o) {
    return value();
  } else {
    return value;
  }
}

function observable(value) {
  function data(nextValue) {
    if (arguments.length === 0) {
      return value;
    }

    value = nextValue;

    data._observers.forEach(function (observer) {
      observer._fresh = false;
    });

    data._observers.forEach(function (observer) {
      return observer();
    });

    return value;
  }

  data._observers = new Set();
  data.$o = true;
  return data;
}

function computed(obs, value) {
  obs = [].concat(obs);

  for (var _iterator = _createForOfIteratorHelperLoose(obs), _step; !(_step = _iterator()).done;) {
    var ob = _step.value;

    if (ob.$o !== undefined) {
      ob._observers.add(update);
    }
  }

  function data() {
    if (!update._fresh) {
      update();
    }

    return value();
  }

  function update() {
    update._fresh = true;

    data._observers.forEach(function (observer) {
      return observer();
    });

    return value;
  }

  data._observers = new Set();
  data.$o = true;
  update();
  return data;
}

function subscribe(obs, value, skip) {
  if (skip === void 0) {
    skip = false;
  }

  obs = [].concat(obs); // change subscribe function to last value memorize

  var lastValue = null;

  var fn = function fn() {
    lastValue = value(lastValue);
  }; // Add subscribe to observers of observables


  for (var _iterator2 = _createForOfIteratorHelperLoose(obs), _step2; !(_step2 = _iterator2()).done;) {
    var ob = _step2.value;

    if (ob._observers) {
      ob._observers.add(fn);
    }
  } // Call subscribe if not skipping 


  if (!skip) {
    fn();
  } // unsubscribe function


  return function () {
    for (var _iterator3 = _createForOfIteratorHelperLoose(obs), _step3; !(_step3 = _iterator3()).done;) {
      var ob = _step3.value;

      if (ob._observers) {
        ob._observers.delete(fn);
      }
    }
  };
} // Is property observable 


function isObservable(prop) {
  if (prop === undefined) {
    return false;
  }

  return prop.$o !== undefined || typeof prop === 'function';
}
/**
 * Watch property
 */


function watch(prop, fn, render) {
  if (render === void 0) {
    render = true;
  }

  if (!isObservable(prop)) {
    if (render) {
      fn(prop);
    }

    return;
  }

  subscribe(prop, function () {
    fn(prop());
  }, !render);
}

function cleanup(fn) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbHVlIiwiYXJndW1lbnRzIiwiZGF0YSIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwibGFzdFZhbHVlIiwiZm4iLCJwcm9wIiwicmVuZGVyIiwiaXNPYnNlcnZhYmxlIiwic3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sc0JBQ1A7QUFDQyxNQUFHQSxLQUFLLENBQVIsSUFBYTtBQUNaLFdBQU9BLEtBQVA7QUFERCxTQUVPO0FBQ047QUFDQTtBQUNEOztBQUVNLDJCQUNQO0FBQ0MsMkJBQ0E7QUFDQyxRQUFJQyxTQUFTLENBQVRBLFdBQUosR0FBNEI7QUFDM0I7QUFDQTs7QUFFREQsU0FBSyxHQUFMQTs7QUFFQUUsUUFBSSxDQUFKQSxtQkFBd0Isb0JBQVk7QUFBRUMsY0FBUSxDQUFSQTtBQUF0Q0Q7O0FBQ0FBLFFBQUksQ0FBSkEsbUJBQXdCLG9CQUFRO0FBQUEsYUFBSUMsUUFBSjtBQUFoQ0Q7O0FBRUE7QUFDQTs7QUFFREEsTUFBSSxDQUFKQSxhQUFrQixJQUFsQkEsR0FBa0IsRUFBbEJBO0FBQ0FBLE1BQUksQ0FBSkE7QUFFQTtBQUNBOztBQUdNLDhCQUNQO0FBQ0NFLEtBQUcsR0FBRyxVQUFOQSxHQUFNLENBQU5BOztBQUVBLGtHQUFtQjtBQUFBLFFBQVhDLEVBQVc7O0FBQ2xCLFFBQUdBLEVBQUUsQ0FBRkEsT0FBSCxXQUF3QjtBQUN2QkEsUUFBRSxDQUFGQTtBQUNBO0FBQ0Q7O0FBRUQsa0JBQ0E7QUFDQyxRQUFHLENBQUNDLE1BQU0sQ0FBVixRQUFtQjtBQUNsQkEsWUFBTTtBQUNOOztBQUVELFdBQU9OLEtBQVA7QUFDQTs7QUFFRCxvQkFDQTtBQUNDTSxVQUFNLENBQU5BOztBQUVBSixRQUFJLENBQUpBLG1CQUF3QixvQkFBUTtBQUFBLGFBQUlDLFFBQUo7QUFBaENEOztBQUVBO0FBQ0E7O0FBRURBLE1BQUksQ0FBSkEsYUFBa0IsSUFBbEJBLEdBQWtCLEVBQWxCQTtBQUNBQSxNQUFJLENBQUpBO0FBRUFJLFFBQU07QUFFTjtBQUNBOztBQUVNLHFDQUNQO0FBQUEsTUFEc0NDLElBQ3RDO0FBRHNDQSxRQUN0QyxHQUQ2QyxLQUFQQTtBQUN0Qzs7QUFDQ0gsS0FBRyxHQUFHLFVBRFAsR0FDTyxDQUFOQSxDQURELENBR0M7O0FBQ0EsTUFBSUksU0FBUyxHQUFiOztBQUVBLE1BQUlDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQU07QUFDZEQsYUFBUyxHQUFHUixLQUFLLENBQWpCUSxTQUFpQixDQUFqQkE7QUFQRixHQU1DLENBTkQsQ0FVQzs7O0FBQ0Esc0dBQW1CO0FBQUEsUUFBWEgsRUFBVzs7QUFDbEIsUUFBR0EsRUFBRSxDQUFMLFlBQWtCO0FBQ2pCQSxRQUFFLENBQUZBO0FBQ0E7QUFkSCxJQWlCQzs7O0FBQ0EsTUFBRyxDQUFILE1BQVU7QUFDVEksTUFBRTtBQW5CSixJQXNCQzs7O0FBQ0EsU0FBTyxZQUFNO0FBQ1osd0dBQW1CO0FBQUEsVUFBWEosRUFBVzs7QUFDbEIsVUFBR0EsRUFBRSxDQUFMLFlBQWtCO0FBQ2pCQSxVQUFFLENBQUZBO0FBQ0E7QUFDRDtBQUxGO0VBU0Q7OztBQUNPLDRCQUNQO0FBQ0MsTUFBR0ssSUFBSSxLQUFQLFdBQXVCO0FBQ3RCO0FBQ0E7O0FBRUQsU0FBT0EsSUFBSSxDQUFKQSxvQkFBeUIsZ0JBQWhDO0FBQ0E7QUFFRDs7Ozs7QUFHTyxpQ0FDUDtBQUFBLE1BRGdDQyxNQUNoQztBQURnQ0EsVUFDaEMsR0FEeUMsSUFBVEE7QUFDaEM7O0FBQ0MsTUFBRyxDQUFDQyxZQUFZLENBQWhCLElBQWdCLENBQWhCLEVBQXdCO0FBQ3ZCLGdCQUFXO0FBQ1ZILFFBQUUsQ0FBRkEsSUFBRSxDQUFGQTtBQUNBOztBQUNEO0FBQ0E7O0FBR0RJLFdBQVMsT0FBTyxZQUFNO0FBQ3JCSixNQUFFLENBQUNDLElBQUhELEVBQUUsQ0FBRkE7QUFEUSxLQUVOLENBRkhJLE1BQVMsQ0FBVEE7QUFHQTs7QUFHTSxxQkFDUCxDQUVDLEMiLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdHJhY2tpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZSh2YWx1ZSlcbntcblx0aWYodmFsdWUuJG8pIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodmFsdWUpXG57XG5cdGZ1bmN0aW9uIGRhdGEobmV4dFZhbHVlKVxuXHR7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHR2YWx1ZSA9IG5leHRWYWx1ZTtcblxuXHRcdGRhdGEuX29ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHsgb2JzZXJ2ZXIuX2ZyZXNoID0gZmFsc2U7IH0pO1xuXHRcdGRhdGEuX29ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IG9ic2VydmVyKCkpO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0ZGF0YS5fb2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuXHRkYXRhLiRvID0gdHJ1ZTtcblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQob2JzLCB2YWx1ZSlcbntcblx0b2JzID0gW10uY29uY2F0KG9icyk7XG5cblx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRpZihvYi4kbyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRvYi5fb2JzZXJ2ZXJzLmFkZCh1cGRhdGUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRhdGEoKVxuXHR7XG5cdFx0aWYoIXVwZGF0ZS5fZnJlc2gpIHtcblx0XHRcdHVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlKClcblx0e1xuXHRcdHVwZGF0ZS5fZnJlc2ggPSB0cnVlO1xuXG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIoKSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRkYXRhLl9vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cdGRhdGEuJG8gPSB0cnVlO1xuXG5cdHVwZGF0ZSgpO1xuXG5cdHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKG9icywgdmFsdWUsIHNraXAgPSBmYWxzZSlcbntcblx0b2JzID0gW10uY29uY2F0KG9icyk7XG5cblx0Ly8gY2hhbmdlIHN1YnNjcmliZSBmdW5jdGlvbiB0byBsYXN0IHZhbHVlIG1lbW9yaXplXG5cdGxldCBsYXN0VmFsdWUgPSBudWxsO1xuXG5cdGxldCBmbiA9ICgpID0+IHtcblx0XHRsYXN0VmFsdWUgPSB2YWx1ZShsYXN0VmFsdWUpO1xuXHR9XG5cblx0Ly8gQWRkIHN1YnNjcmliZSB0byBvYnNlcnZlcnMgb2Ygb2JzZXJ2YWJsZXNcblx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRpZihvYi5fb2JzZXJ2ZXJzKSB7XG5cdFx0XHRvYi5fb2JzZXJ2ZXJzLmFkZChmbik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FsbCBzdWJzY3JpYmUgaWYgbm90IHNraXBwaW5nIFxuXHRpZighc2tpcCkge1xuXHRcdGZuKCk7XG5cdH1cblxuXHQvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGZvcihsZXQgb2Igb2Ygb2JzKSB7XG5cdFx0XHRpZihvYi5fb2JzZXJ2ZXJzKSB7XG5cdFx0XHRcdG9iLl9vYnNlcnZlcnMuZGVsZXRlKGZuKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gSXMgcHJvcGVydHkgb2JzZXJ2YWJsZSBcbmV4cG9ydCBmdW5jdGlvbiBpc09ic2VydmFibGUocHJvcClcbntcblx0aWYocHJvcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHByb3AuJG8gIT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBXYXRjaCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2gocHJvcCwgZm4sIHJlbmRlciA9IHRydWUpXG57XG5cdGlmKCFpc09ic2VydmFibGUocHJvcCkpIHtcblx0XHRpZihyZW5kZXIpIHtcblx0XHRcdGZuKHByb3ApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXG5cdHN1YnNjcmliZShwcm9wLCAoKSA9PiB7XG5cdFx0Zm4ocHJvcCgpKTtcblx0fSwgIXJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXAoZm4pXG57XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9