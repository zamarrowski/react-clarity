'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-shadow: 0 0.125rem 0 0 #d7d7d7;\n  border-radius: .125rem;\n  border: 1px solid #d7d7d7;\n  position: relative;\n  display: block;\n  background-color: #fff;\n  width: 100%;\n'], ['\n  box-shadow: 0 0.125rem 0 0 #d7d7d7;\n  border-radius: .125rem;\n  border: 1px solid #d7d7d7;\n  position: relative;\n  display: block;\n  background-color: #fff;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid #eee;\n  color: #000;\n  font-size: 18px;\n  font-weight: 200;\n  letter-spacing: normal;\n  padding: 15px 25px;\n'], ['\n  border-bottom: 1px solid #eee;\n  color: #000;\n  font-size: 18px;\n  font-weight: 200;\n  letter-spacing: normal;\n  padding: 15px 25px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      border-bottom: 1px solid #eee;\n      padding: 15px 25px;\n'], ['\n      border-bottom: 1px solid #eee;\n      padding: 15px 25px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 15px 25px;\n'], ['\n  padding: 15px 25px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: block;\n  height: auto;\n  width: 100%;\n'], ['\n  display: block;\n  height: auto;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject);

var CardTitle = _styledComponents2.default.div(_templateObject2);

var CardBlock = _styledComponents2.default.div(_templateObject3);

var CardFooter = _styledComponents2.default.div(_templateObject4);

var CardImage = _styledComponents2.default.img(_templateObject5);

exports.default = function (props) {
  return _react2.default.createElement(
    Card,
    props,
    _react2.default.createElement(
      CardTitle,
      null,
      props.title
    ),
    props.image ? _react2.default.createElement(CardImage, { src: props.image }) : '',
    _react2.default.createElement(
      CardBlock,
      null,
      props.children
    ),
    props.actions ? _react2.default.createElement(
      CardFooter,
      null,
      props.actions
    ) : ''
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Card.js.map