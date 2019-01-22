'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n'], ['\n  position: relative;\n  display: inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  font-family: \'MetropolisRegular\';\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 5rem;\n  max-width: 15rem;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: .125rem;\n  box-shadow: 0 1px 0.125rem rgba(115,115,115,.25);\n  margin-top: .083333rem;\n  padding: .5rem 0;\n  z-index: 1000;\n  visibility: hidden;\n\n  ', ';\n'], ['\n  display: flex;\n  font-family: \'MetropolisRegular\';\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 5rem;\n  max-width: 15rem;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: .125rem;\n  box-shadow: 0 1px 0.125rem rgba(115,115,115,.25);\n  margin-top: .083333rem;\n  padding: .5rem 0;\n  z-index: 1000;\n  visibility: hidden;\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    visibility: visible;\n  '], ['\n    visibility: visible;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: normal;\n  padding: 0 .5rem;\n  line-height: .75rem;\n  margin: 0;\n  color: #313131;\n  white-space: nowrap;\n  margin-bottom: 5px;\n'], ['\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: normal;\n  padding: 0 .5rem;\n  line-height: .75rem;\n  margin: 0;\n  color: #313131;\n  white-space: nowrap;\n  margin-bottom: 5px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  letter-spacing: normal;\n  font-weight: 400;\n  background: 0 0;\n  border: 0;\n  color: #565656;\n  cursor: pointer;\n  display: block;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  width: 100%;\n  text-transform: none;\n  padding: .125rem 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  border-radius: 0;\n  white-space: nowrap;\n  \n  &:hover {\n    background-color: #eee;\n    color: #565656;\n    text-decoration: none;\n  };\n\n  ', ';\n'], ['\n  font-size: 14px;\n  letter-spacing: normal;\n  font-weight: 400;\n  background: 0 0;\n  border: 0;\n  color: #565656;\n  cursor: pointer;\n  display: block;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  width: 100%;\n  text-transform: none;\n  padding: .125rem 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  border-radius: 0;\n  white-space: nowrap;\n  \n  &:hover {\n    background-color: #eee;\n    color: #565656;\n    text-decoration: none;\n  };\n\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    cursor: not-allowed;\n    opacity: .4;\n    &:hover\xA0{\n      background: 0 0;\n    };\n  '], ['\n    cursor: not-allowed;\n    opacity: .4;\n    &:hover\xA0{\n      background: 0 0;\n    };\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('./../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactIonicons = require('react-ionicons');

var _reactIonicons2 = _interopRequireDefault(_reactIonicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dropdown = _styledComponents2.default.div(_templateObject);

var DropdownContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.show && (0, _styledComponents.css)(_templateObject3);
});

var DropdownHeader = _styledComponents2.default.h4(_templateObject4);

var DropdownButton = _styledComponents2.default.button(_templateObject5, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject6);
});

var DropdownComponent = function (_React$Component) {
  _inherits(DropdownComponent, _React$Component);

  function DropdownComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownComponent.__proto__ || Object.getPrototypeOf(DropdownComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Dropdown,
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: this._handleClick.bind(this), solid: true },
          'DROPDOWN ',
          _react2.default.createElement(_reactIonicons2.default, { fontSize: '15px', icon: 'ios-arrow-down', style: { verticalAlign: 'middle' }, color: 'white' })
        ),
        _react2.default.createElement(
          DropdownContainer,
          { show: this.state.open },
          this.props.headerName ? _react2.default.createElement(
            DropdownHeader,
            null,
            this.props.headerName
          ) : '',
          this.props.actions && this.props.actions.map(function (action, key) {
            return _react2.default.createElement(
              DropdownButton,
              { onClick: _this2._onClickDropdownButton.bind(_this2, action.onClick || null), disabled: action.disabled, key: key },
              action.name
            );
          })
        )
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: '_onClickDropdownButton',
    value: function _onClickDropdownButton(cb) {
      this.setState({ open: !this.state.open }, function () {
        if (cb) cb();
      });
    }
  }]);

  return DropdownComponent;
}(_react2.default.Component);

exports.default = DropdownComponent;
module.exports = exports['default'];
//# sourceMappingURL=Dropdown.js.map