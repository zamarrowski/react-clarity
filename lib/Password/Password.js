'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconShow = "ios-eye-outline";
var IconHide = "ios-eye-off-outline";

exports.default = function (props) {
  var _useState = (0, _react.useState)(props.value || ""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(IconShow),
      _useState4 = _slicedToArray(_useState3, 2),
      icon = _useState4[0],
      setIcon = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isVisible = _useState6[0],
      setVisibility = _useState6[1];

  var changeValue = function changeValue(_ref) {
    var value = _ref.target.value;
    return setValue(value, function () {
      return props.onChange(value);
    });
  };
  var switchVisibility = function switchVisibility() {
    return isVisible ? function () {
      return setVisibility(false, function () {
        return setIcon(IconHide);
      });
    } : function () {
      return setVisibility(true, function () {
        return setIcon(IconShow);
      });
    };
  };

  return _react2.default.createElement(_Input2.default, _extends({
    type: isVisible ? "text" : "password",
    icon: icon,
    value: value,
    onChange: changeValue,
    onIconClick: switchVisibility()
  }, props));
};

module.exports = exports['default'];
//# sourceMappingURL=Password.js.map