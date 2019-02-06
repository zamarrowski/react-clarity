'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 100%;\n  min-width: 2.5rem;\n  height: 35px;\n  border-bottom: 1px solid #9a9a9a;\n  background: linear-gradient(to bottom,transparent 95%,#0094d2 95%) no-repeat;\n  background-size: 0 100%;\n  transition: background-size .2s ease;\n  transition-property: background-size;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  font-size: inherit;\n  margin-bottom: 10px;\n  outline: 0;\n  \n  ', ';\n\n  ', ';\n  \n  ', '\n'], ['\n  display: inline-block;\n  width: 100%;\n  min-width: 2.5rem;\n  height: 35px;\n  border-bottom: 1px solid #9a9a9a;\n  background: linear-gradient(to bottom,transparent 95%,#0094d2 95%) no-repeat;\n  background-size: 0 100%;\n  transition: background-size .2s ease;\n  transition-property: background-size;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  font-size: inherit;\n  margin-bottom: 10px;\n  outline: 0;\n  \n  ', ';\n\n  ', ';\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border-bottom-color: #c92100;\n    background: linear-gradient(to bottom,transparent 95%,#c92100 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n  '], ['\n    border-bottom-color: #c92100;\n    background: linear-gradient(to bottom,transparent 95%,#c92100 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    border-bottom-color: #318700;\n    background: linear-gradient(to bottom,transparent 95%,#318700 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n  '], ['\n    border-bottom-color: #318700;\n    background: linear-gradient(to bottom,transparent 95%,#318700 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border-bottom: 1px solid ', ';\n    background-size: 100% 100%;\n  '], ['\n    border-bottom: 1px solid ', ';\n    background-size: 100% 100%;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  background: 0 0;\n  width: calc(100% - 64px);\n  height: 100%;\n  color: #000;\n  outline: none;\n'], ['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  display: inline-block;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  background: 0 0;\n  width: calc(100% - 64px);\n  height: 100%;\n  color: #000;\n  outline: none;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: block;\n  color: #444;\n  font-weight: 600;\n  line-height: .75rem;\n  font-family: \'MetropolisRegular\';\n'], ['\n  display: block;\n  color: #444;\n  font-weight: 600;\n  line-height: .75rem;\n  font-family: \'MetropolisRegular\';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  margin: 0 1rem;\n'], ['\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  margin: 0 1rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIonicons = require('react-ionicons');

var _reactIonicons2 = _interopRequireDefault(_reactIonicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.success && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.focus && (0, _styledComponents.css)(_templateObject4, function (props) {
    return props.success ? "#318700" : "#0094d2";
  });
});

var Input = _styledComponents2.default.input(_templateObject5);

var Label = _styledComponents2.default.label(_templateObject6);

var Icon = (0, _styledComponents2.default)(_reactIonicons2.default)(_templateObject7);

exports.default = function (props) {
  var label = props.label,
      icon = props.icon,
      onIconClick = props.onIconClick,
      onFocus = props.onFocus,
      onBlur = props.onBlur;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      inFocus = _useState2[0],
      setFocus = _useState2[1];

  var handleOnFocus = function handleOnFocus(e) {
    return setFocus(true, onFocus != null ? function () {
      return onFocus(e);
    } : Function.prototype);
  };
  var handleOnBlur = function handleOnBlur(e) {
    return setFocus(false, onBlur != null ? function () {
      return onBlur(e);
    } : Function.prototype);
  };

  return _react2.default.createElement(
    Wrapper,
    _extends({}, props, { focus: inFocus }),
    label && _react2.default.createElement(
      Label,
      null,
      label
    ),
    _react2.default.createElement(Input, _extends({ onFocus: handleOnFocus, onBlur: handleOnBlur }, props)),
    icon && _react2.default.createElement(Icon, { color: '#0095d3', icon: icon, onClick: onIconClick })
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Input.js.map