'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  100% {\n    transform: rotate(360deg)\n  }\n'], ['\n  100% {\n    transform: rotate(360deg)\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 70px;\n  width: 70px;\n  border: 5px solid #E4E4E4;\n  border-bottom-color: #258CC1;\n  border-radius: 50%;\n  animation-name: ', ';\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n'], ['\n  height: 70px;\n  width: 70px;\n  border: 5px solid #E4E4E4;\n  border-bottom-color: #258CC1;\n  border-radius: 50%;\n  animation-name: ', ';\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styledComponents.keyframes)(_templateObject);

var Spinner = _styledComponents2.default.div(_templateObject2, rotate);

exports.default = function (props) {
  return _react2.default.createElement(Spinner, props);
};

module.exports = exports['default'];
//# sourceMappingURL=Spinner.js.map