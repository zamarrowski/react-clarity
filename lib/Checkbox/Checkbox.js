'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: \'MetropolisRegular\';\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  };\n'], ['\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: \'MetropolisRegular\';\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  };\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &:checked + span {\n    background-color: #0079b8;\n  };\n\n  &:checked + span:after {\n    display: block;\n  }\n'], ['\n  &:checked + span {\n    background-color: #0079b8;\n  };\n\n  &:checked + span:after {\n    display: block;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  background-color: #eee;\n  border: 1px solid #9a9a9a;\n  border-radius: .125rem;\n\n  &:hover {\n    background-color: #ccc;\n  };\n\n  &:after {\n    content: "";\n    position: absolute;\n    display: none;\n  };\n\n  &:after {\n    left: 5px;\n    top: 3px;\n    width: 2px;\n    height: 6px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  };\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  background-color: #eee;\n  border: 1px solid #9a9a9a;\n  border-radius: .125rem;\n\n  &:hover {\n    background-color: #ccc;\n  };\n\n  &:after {\n    content: "";\n    position: absolute;\n    display: none;\n  };\n\n  &:after {\n    left: 5px;\n    top: 3px;\n    width: 2px;\n    height: 6px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  };\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelContainer = _styledComponents2.default.label(_templateObject);

var InputCheckbox = _styledComponents2.default.input(_templateObject2);

var SpanCheckmark = _styledComponents2.default.span(_templateObject3);

exports.default = function (props) {
  return _react2.default.createElement(
    LabelContainer,
    null,
    props.label,
    _react2.default.createElement(InputCheckbox, _extends({}, props, { onChange: function onChange(e) {
        return props.onCheck(e.target.checked);
      }, type: 'checkbox' })),
    _react2.default.createElement(SpanCheckmark, null)
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Checkbox.js.map