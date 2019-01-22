'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: .333333rem calc(.5rem - 1px);\n  color: #565656;\n  text-align: left;\n  font-family: \'MetropolisRegular\';\n  \n  ', ';\n\n  ', '\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n'], ['\n  padding: .333333rem calc(.5rem - 1px);\n  color: #565656;\n  text-align: left;\n  font-family: \'MetropolisRegular\';\n  \n  ', ';\n\n  ', '\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 0.125rem;\n  '], ['\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 0.125rem;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    color: #fff;\n    border: 0;\n  '], ['\n    color: #fff;\n    border: 0;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border-color: #60b515;\n    background-color: #dff0d0;\n  '], ['\n    border-color: #60b515;\n    background-color: #dff0d0;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    border-color: #49afd9;\n    background-color: #e1f1f6;\n  '], ['\n    border-color: #49afd9;\n    background-color: #e1f1f6;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    border-color: #ffdc0b;\n    background-color: #feecb5;\n  '], ['\n    border-color: #ffdc0b;\n    background-color: #feecb5;\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    border-color: #ebafa6;\n    background-color: #f5dbd9;\n  '], ['\n    border-color: #ebafa6;\n    background-color: #f5dbd9;\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    background-color: #62a420;\n  '], ['\n    background-color: #62a420;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    background-color: #0079b8;\n  '], ['\n    background-color: #0079b8;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    background-color: #c25400;\n  '], ['\n    background-color: #c25400;\n  ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    background-color: #c92100;\n  '], ['\n    background-color: #c92100;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIonicons = require('react-ionicons');

var _reactIonicons2 = _interopRequireDefault(_reactIonicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Alert = _styledComponents2.default.div(_templateObject, function (props) {
  return props.standard && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.appLevel && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.standard && props.success && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.standard && props.info && (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.standard && props.warning && (0, _styledComponents.css)(_templateObject6);
}, function (props) {
  return props.standard && props.error && (0, _styledComponents.css)(_templateObject7);
}, function (props) {
  return props.appLevel && props.success && (0, _styledComponents.css)(_templateObject8);
}, function (props) {
  return props.appLevel && props.info && (0, _styledComponents.css)(_templateObject9);
}, function (props) {
  return props.appLevel && props.warning && (0, _styledComponents.css)(_templateObject10);
}, function (props) {
  return props.appLevel && props.error && (0, _styledComponents.css)(_templateObject11);
});

var getIconName = function getIconName(props) {
  if (props.success) return 'ios-checkmark-circle-outline';
  if (props.info) return 'ios-information-circle-outline';
  if (props.warning) return 'ios-warning-outline';
  if (props.error) return 'ios-warning';
};

var getColor = function getColor(props) {
  if (props.standard) {
    if (props.success) return '#318700';
    if (props.info) return '#0079b8';
    if (props.warning) return '#565656';
    if (props.error) return '#c92100';
  }
  return '#fff';
};

var getIcon = function getIcon(props) {
  return _react2.default.createElement(_reactIonicons2.default, { style: { verticalAlign: 'bottom', marginRight: '5px' }, icon: getIconName(props), color: getColor(props) });
};

exports.default = function (props) {
  return _react2.default.createElement(
    Alert,
    props,
    getIcon(props),
    props.message
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Alert.js.map