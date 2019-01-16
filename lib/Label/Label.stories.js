'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Label', module).add('simple', function () {
  return _react2.default.createElement(
    _Label2.default,
    null,
    'Austin'
  );
}).add('purple', function () {
  return _react2.default.createElement(
    _Label2.default,
    { purple: true },
    'Austin'
  );
}).add('blue', function () {
  return _react2.default.createElement(
    _Label2.default,
    { blue: true },
    'Austin'
  );
}).add('orange', function () {
  return _react2.default.createElement(
    _Label2.default,
    { orange: true },
    'Austin'
  );
}).add('lightBlue', function () {
  return _react2.default.createElement(
    _Label2.default,
    { lightBlue: true },
    'Austin'
  );
}).add('info', function () {
  return _react2.default.createElement(
    _Label2.default,
    { info: true },
    'Austin'
  );
}).add('success', function () {
  return _react2.default.createElement(
    _Label2.default,
    { success: true },
    'Austin'
  );
}).add('warning', function () {
  return _react2.default.createElement(
    _Label2.default,
    { warning: true },
    'Austin'
  );
}).add('error', function () {
  return _react2.default.createElement(
    _Label2.default,
    { error: true },
    'Austin'
  );
});
//# sourceMappingURL=Label.stories.js.map