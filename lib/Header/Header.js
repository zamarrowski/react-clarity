'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 24px;\n  background-color: #002538;\n  flex: 0 0 60px;\n  display: flex;\n  color: #fafafa;\n  height: 60px;\n  white-space: nowrap;\n'], ['\n  margin-bottom: 24px;\n  background-color: #002538;\n  flex: 0 0 60px;\n  display: flex;\n  color: #fafafa;\n  height: 60px;\n  white-space: nowrap;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 60px;\n  display: flex;\n  flex: 0 0 auto;\n  min-width: 120px;\n  padding: 0 25px;\n  color: #fafafa;\n  white-space: nowrap;\n'], ['\n  height: 60px;\n  display: flex;\n  flex: 0 0 auto;\n  min-width: 120px;\n  padding: 0 25px;\n  color: #fafafa;\n  white-space: nowrap;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  height: 60px;\n  text-decoration: none;\n  color: #fafafa;\n  padding-right: 15px;\n'], ['\n  display: inline-flex;\n  align-items: center;\n  height: 60px;\n  text-decoration: none;\n  color: #fafafa;\n  padding-right: 15px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 0 0 auto;\n  height: 60px;\n  color: #fafafa;\n  white-space: nowrap;\n'], ['\n  display: flex;\n  flex: 0 0 auto;\n  height: 60px;\n  color: #fafafa;\n  white-space: nowrap;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  opacity: 1;\n  line-height: 60px;\n  display: inline-block;\n  color: #fafafa;\n  padding: 0 20px;\n  font-weight: 500;\n  text-decoration: none;\n  opacity: .65;\n\n  &:hover {\n    opacity: 1;\n  };\n\n  ', ';\n'], ['\n  opacity: 1;\n  line-height: 60px;\n  display: inline-block;\n  color: #fafafa;\n  padding: 0 20px;\n  font-weight: 500;\n  text-decoration: none;\n  opacity: .65;\n\n  &:hover {\n    opacity: 1;\n  };\n\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background: rgba(255,255,255,.15);\n  '], ['\n    background: rgba(255,255,255,.15);\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.header(_templateObject);

var HeaderBranding = _styledComponents2.default.div(_templateObject2);

var HeaderTitle = _styledComponents2.default.a(_templateObject3);

var HeaderNav = _styledComponents2.default.div(_templateObject4);

var NavLink = _styledComponents2.default.a(_templateObject5, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject6);
});

exports.default = function (props) {
  return _react2.default.createElement(
    Header,
    null,
    _react2.default.createElement(
      HeaderBranding,
      null,
      _react2.default.createElement(
        HeaderTitle,
        { href: '/' },
        props.title
      ),
      _react2.default.createElement(
        HeaderNav,
        null,
        props.navLinks && props.navLinks.map(function (navLink, key) {
          return _react2.default.createElement(
            NavLink,
            { active: navLink.active, href: navLink.link, key: key },
            navLink.text
          );
        })
      )
    )
  );
};

module.exports = exports['default'];
//# sourceMappingURL=Header.js.map