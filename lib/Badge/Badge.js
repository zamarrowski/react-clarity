'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  justify-content: center;\n  line-height: normal;\n  border-radius: 50%;\n  padding: 8px 11px;\n  white-space: nowrap;\n  text-align: center;\n  font-family: \'MetropolisRegular\';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n'], ['\n  vertical-align: middle;\n  justify-content: center;\n  line-height: normal;\n  border-radius: 50%;\n  padding: 8px 11px;\n  white-space: nowrap;\n  text-align: center;\n  font-family: \'MetropolisRegular\';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        padding: 8px 8px;\n      '], ['\n        padding: 8px 8px;\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background: #318700;\n    color: #fff;\n  '], ['\n    background: #318700;\n    color: #fff;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background: #0079b8;\n    color: #fff;\n  '], ['\n    background: #0079b8;\n    color: #fff;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    background: #ffdc0b;\n    color: #000;\n  '], ['\n    background: #ffdc0b;\n    color: #000;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background: #c92100;\n    color: #fff;\n  '], ['\n    background: #c92100;\n    color: #fff;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Badge = _styledComponents2.default.span(_templateObject, function (props) {
  if (props.children.length > 1) {
    return (0, _styledComponents.css)(_templateObject2);
  }
}, function (props) {
  return props.success && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.info && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.warning && (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.danger && (0, _styledComponents.css)(_templateObject6);
});

var format = function format(text) {
  var number = Number(text);
  if (number > 99) return '99+';
};

exports.default = function (props) {
  return _react2.default.createElement(
    Badge,
    props,
    props.format ? format(props.text) : props.text
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Badge.js.map