'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: 400;\n  letter-spacing: .03em;\n  line-height: .458333rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 50px;\n  border: 1px solid #737373;\n  height: .875rem;\n  margin: 0 .25rem 0 0;\n  white-space: nowrap;\n  color: #565656;\n  font-family: \'MetropolisRegular\';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n  \n'], ['\n  font-weight: 400;\n  letter-spacing: .03em;\n  line-height: .458333rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 50px;\n  border: 1px solid #737373;\n  height: .875rem;\n  margin: 0 .25rem 0 0;\n  white-space: nowrap;\n  color: #565656;\n  font-family: \'MetropolisRegular\';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n  \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border: 1px solid #9b56bb;\n  '], ['\n    border: 1px solid #9b56bb;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    border: 1px solid #004a70;\n  '], ['\n    border: 1px solid #004a70;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border: 1px solid #ff8400;\n  '], ['\n    border: 1px solid #ff8400;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    border: 1px solid #89cbdf;\n  '], ['\n    border: 1px solid #89cbdf;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background: #e1f1f6;\n    color: #004a70;\n    border: 1px solid #49afd9;\n  '], ['\n    background: #e1f1f6;\n    color: #004a70;\n    border: 1px solid #49afd9;\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    background: #dff0d0;\n    color: #266900;\n    border: 1px solid #60b515;\n  '], ['\n    background: #dff0d0;\n    color: #266900;\n    border: 1px solid #60b515;\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    background: #fef3b5;\n    color: #313131;\n    border: 1px solid #fdcf08;\n  '], ['\n    background: #fef3b5;\n    color: #313131;\n    border: 1px solid #fdcf08;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    background: #f5dbd9;\n    color: #a32100;\n    border: 1px solid #ebafa6;\n  '], ['\n    background: #f5dbd9;\n    color: #a32100;\n    border: 1px solid #ebafa6;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.span(_templateObject, function (props) {
  return props.purple && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.blue && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.orange && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.lightBlue && (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.info && (0, _styledComponents.css)(_templateObject6);
}, function (props) {
  return props.success && (0, _styledComponents.css)(_templateObject7);
}, function (props) {
  return props.warning && (0, _styledComponents.css)(_templateObject8);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject9);
});

exports.default = function (props) {
  return _react2.default.createElement(
    Label,
    props,
    props.children
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Label.js.map