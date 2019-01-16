'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: inherit;\n'], ['\n  box-sizing: inherit;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    height: 50px;\n    list-style-type: none;\n    align-items: center;\n    box-shadow: 0 -1px 0 #ccc inset;\n    margin: 0;\n    width: 100%;\n    white-space: nowrap;\n    padding-left: 0px;\n'], ['\n    display: flex;\n    height: 50px;\n    list-style-type: none;\n    align-items: center;\n    box-shadow: 0 -1px 0 #ccc inset;\n    margin: 0;\n    width: 100%;\n    white-space: nowrap;\n    padding-left: 0px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-right: 1rem;\n  color: #000;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 400;\n  letter-spacing: normal;\n  display: inline-block;\n  color: #737373;\n  padding: 0 .125rem;\n  border: none;\n  box-shadow: none;\n  line-height: 1.5rem;\n  cursor: pointer;\n  -webkit-appearance: none!important;\n  min-width: 3rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n  vertical-align: middle;\n  height: 48px;\n  &:hover {\n    box-shadow: 0 -3px 0 #0079b8 inset;\n    transition: box-shadow .2s ease-in;\n  };\n\n  ', '\n\n'], ['\n  margin-right: 1rem;\n  color: #000;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 400;\n  letter-spacing: normal;\n  display: inline-block;\n  color: #737373;\n  padding: 0 .125rem;\n  border: none;\n  box-shadow: none;\n  line-height: 1.5rem;\n  cursor: pointer;\n  -webkit-appearance: none!important;\n  min-width: 3rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n  vertical-align: middle;\n  height: 48px;\n  &:hover {\n    box-shadow: 0 -3px 0 #0079b8 inset;\n    transition: box-shadow .2s ease-in;\n  };\n\n  ', '\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    box-shadow: 0 -3px 0 #0079b8 inset;\n    transition: box-shadow .2s ease-in;\n  '], ['\n    box-shadow: 0 -3px 0 #0079b8 inset;\n    transition: box-shadow .2s ease-in;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  max-width: 900px;\n  display: block;\n  box-sizing: inherit;\n  margin-top: 15px;\n'], ['\n  max-width: 900px;\n  display: block;\n  box-sizing: inherit;\n  margin-top: 15px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabContainer = _styledComponents2.default.div(_templateObject);

var TabButtonContainer = _styledComponents2.default.ul(_templateObject2);

var TabButton = _styledComponents2.default.button(_templateObject3, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject4);
});

var TabContent = _styledComponents2.default.section(_templateObject5);

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tabSelected: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        TabContainer,
        null,
        _react2.default.createElement(
          TabButtonContainer,
          null,
          this.props.tabs.map(function (tab, key) {
            return _react2.default.createElement(
              TabButton,
              { active: _this2.state.tabSelected === key,
                onClick: function onClick() {
                  return _this2.setState({ tabSelected: key });
                },
                key: key
              },
              tab.name
            );
          })
        ),
        this.props.tabs.map(function (tab, key) {
          return _react2.default.createElement(
            'div',
            null,
            _this2.state.tabSelected === key ? _react2.default.createElement(
              TabContent,
              { key: key },
              tab.content
            ) : ''
          );
        })
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;
module.exports = exports['default'];
//# sourceMappingURL=Tabs.js.map