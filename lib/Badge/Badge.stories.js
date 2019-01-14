'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Badges', module).add('success', function () {
  return _react2.default.createElement(_Badge2.default, { text: '94', success: true });
}).add('info', function () {
  return _react2.default.createElement(_Badge2.default, { text: '10', info: true });
}).add('warning', function () {
  return _react2.default.createElement(_Badge2.default, { text: '333', format: 'true', warning: true });
}).add('danger', function () {
  return _react2.default.createElement(_Badge2.default, { text: '5', danger: true });
});
//# sourceMappingURL=Badge.stories.js.map