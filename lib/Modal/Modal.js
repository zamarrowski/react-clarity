'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 50px;\n\n  ', ';\n\n  ', ';\n\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 50px;\n\n  ', ';\n\n  ', ';\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n  '], ['\n    display: flex;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1050;\n  width: 600px;\n  max-width: 100%;\n'], ['\n  position: relative;\n  z-index: 1050;\n  width: 600px;\n  max-width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  background-color: #313131;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  opacity: .85;\n  z-index: 1040;\n'], ['\n  position: absolute;\n  background-color: #313131;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  opacity: .85;\n  z-index: 1040;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 2px rgba(0,0,0,.2);\n'], ['\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 2px rgba(0,0,0,.2);\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  border-bottom: none;\n  padding: 0 0 20px;\n'], ['\n  border-bottom: none;\n  padding: 0 0 20px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  max-height: 70vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n'], ['\n  max-height: 70vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: flex-end;\n'], ['\n  display: flex;\n  justify-content: flex-end;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Modal = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.show) {
    window.scrollTo(0, 0);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else {
    document.getElementsByTagName('body')[0].style.overflow = 'inherit';
  }
}, function (props) {
  return props.show && (0, _styledComponents.css)(_templateObject2);
});

var ModalDialog = _styledComponents2.default.div(_templateObject3);

var ModalBackDrop = _styledComponents2.default.div(_templateObject4);

var ModalContent = _styledComponents2.default.div(_templateObject5);

var ModalHeader = _styledComponents2.default.div(_templateObject6);

var ModalBody = _styledComponents2.default.div(_templateObject7);

var ModalFooter = _styledComponents2.default.div(_templateObject8);

exports.default = function (props) {
  return _react2.default.createElement(
    Modal,
    props,
    _react2.default.createElement(
      ModalDialog,
      null,
      _react2.default.createElement(
        ModalContent,
        null,
        _react2.default.createElement(
          ModalHeader,
          null,
          props.title
        ),
        _react2.default.createElement(
          ModalBody,
          null,
          props.children
        ),
        _react2.default.createElement(
          ModalFooter,
          null,
          props.actions
        )
      )
    ),
    _react2.default.createElement(ModalBackDrop, null)
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Modal.js.map