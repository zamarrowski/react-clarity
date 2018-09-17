'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  appearance: none;\n'], ['\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  appearance: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Checkbox = _styledComponents2.default.input(_templateObject);

exports.default = function (props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(Checkbox, _extends({ type: 'checkbox' }, props)),
    ' ',
    _react2.default.createElement(
      'label',
      null,
      props.label
    )
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Checkbox.js.map