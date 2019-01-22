'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: #000;\n  font-weight: 200;\n  font-family: "MetropolisRegular","Avenir Next","Helvetica Neue",Arial,sans-serif;\n  font-size: .75rem;\n  letter-spacing: normal;\n  line-height: 1rem;\n  margin-bottom: 0;\n  font-size: 16px;\n'], ['\n  color: #000;\n  font-weight: 200;\n  font-family: "MetropolisRegular","Avenir Next","Helvetica Neue",Arial,sans-serif;\n  font-size: .75rem;\n  letter-spacing: normal;\n  line-height: 1rem;\n  margin-bottom: 0;\n  font-size: 16px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: transparent;\n  border-radius: 0;\n  font-size: inherit;\n  height: 2em;\n  margin: 0;\n  max-height: .583333rem;\n  min-height: .166667rem;\n  overflow: hidden;\n  display: block;\n  width: 100%;\n'], ['\n  background-color: transparent;\n  border-radius: 0;\n  font-size: inherit;\n  height: 2em;\n  margin: 0;\n  max-height: .583333rem;\n  min-height: .166667rem;\n  overflow: hidden;\n  display: block;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  display: block;\n  background-color: #eee;\n  border: none;\n  color: #0079b8;\n  height: 100%;\n  width: 100%;\n  &::-webkit-progress-value {\n    background: #0079b8;\n  };\n\n  ', ';\n\n  ', ';\n'], ['\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  display: block;\n  background-color: #eee;\n  border: none;\n  color: #0079b8;\n  height: 100%;\n  width: 100%;\n  &::-webkit-progress-value {\n    background: #0079b8;\n  };\n\n  ', ';\n\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    &::-webkit-progress-value {\n      background: #c92100;\n    };\n  '], ['\n    &::-webkit-progress-value {\n      background: #c92100;\n    };\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    &::-webkit-progress-value {\n      background: #60b515;\n    };\n  '], ['\n    &::-webkit-progress-value {\n      background: #60b515;\n    };\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProgressBarTitle = _styledComponents2.default.h4(_templateObject);

var ProgressContainer = _styledComponents2.default.div(_templateObject2);

var ProgressBar = _styledComponents2.default.progress(_templateObject3, function (props) {
  return props.danger && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.success && (0, _styledComponents.css)(_templateObject5);
});

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    props.title ? _react2.default.createElement(
      ProgressBarTitle,
      null,
      props.title
    ) : '',
    _react2.default.createElement(
      ProgressContainer,
      null,
      _react2.default.createElement(ProgressBar, { danger: props.danger, success: props.success, max: props.max, value: props.value })
    )
  );
};

module.exports = exports['default'];
//# sourceMappingURL=ProgressBar.js.map