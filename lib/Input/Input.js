'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  color: #444;\n  font-weight: 600;\n  line-height: .75rem;\n  font-family: \'MetropolisRegular\';\n'], ['\n  display: block;\n  color: #444;\n  font-weight: 600;\n  line-height: .75rem;\n  font-family: \'MetropolisRegular\';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  margin: 0;\n  padding: 0 .25rem;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  background: 0 0;\n  height: 35px;\n  color: #000;\n  display: inline-block;\n  min-width: 2.5rem;\n  border-bottom: 1px solid #9a9a9a;\n  background: linear-gradient(to bottom,transparent 95%,#0094d2 95%) no-repeat;\n  background-size: 0 100%;\n  transition: background-size .2s ease;\n  transition-property: background-size;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  font-size: inherit;\n  margin-bottom: 10px;\n\n  ', ';\n\n  &:focus {\n    border-bottom: 1px solid #0094d2;\n    background-size: 100% 100%;\n    outline: 0;\n  };\n\n  ', ';\n\n  ', ';\n\n'], ['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  margin: 0;\n  padding: 0 .25rem;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  background: 0 0;\n  height: 35px;\n  color: #000;\n  display: inline-block;\n  min-width: 2.5rem;\n  border-bottom: 1px solid #9a9a9a;\n  background: linear-gradient(to bottom,transparent 95%,#0094d2 95%) no-repeat;\n  background-size: 0 100%;\n  transition: background-size .2s ease;\n  transition-property: background-size;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  font-size: inherit;\n  margin-bottom: 10px;\n\n  ', ';\n\n  &:focus {\n    border-bottom: 1px solid #0094d2;\n    background-size: 100% 100%;\n    outline: 0;\n  };\n\n  ', ';\n\n  ', ';\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n  '], ['\n    width: 100%;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border-bottom-color: #c92100;\n    background: linear-gradient(to bottom,transparent 95%,#c92100 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n\n    &:focus {\n      border-bottom: 1px solid #c92100;\n      background-size: 100% 100%;\n    };\n\n  '], ['\n    border-bottom-color: #c92100;\n    background: linear-gradient(to bottom,transparent 95%,#c92100 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n\n    &:focus {\n      border-bottom: 1px solid #c92100;\n      background-size: 100% 100%;\n    };\n\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    border-bottom-color: #318700;\n    background: linear-gradient(to bottom,transparent 95%,#318700 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n\n    &:focus {\n      border-bottom: 1px solid #318700;\n      background-size: 100% 100%;\n    };\n\n  '], ['\n    border-bottom-color: #318700;\n    background: linear-gradient(to bottom,transparent 95%,#318700 95%) no-repeat;\n    background-size: 0 100%;\n    transition: background-size .2s ease;\n\n    &:focus {\n      border-bottom: 1px solid #318700;\n      background-size: 100% 100%;\n    };\n\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.label(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2, function (props) {
  return props.fullWidth && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.success && (0, _styledComponents.css)(_templateObject5);
});

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    props.label ? _react2.default.createElement(
      Label,
      null,
      props.label
    ) : '',
    _react2.default.createElement(Input, props)
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Input.js.map