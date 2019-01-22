'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Badge3 = require('./Badge.md');

var _Badge4 = _interopRequireDefault(_Badge3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Badges', module).add('success', (0, _storybookReadme.withReadme)(_Badge4.default, function () {
  return _react2.default.createElement(_Badge2.default, { text: '94', success: true });
})).add('info', (0, _storybookReadme.withReadme)(_Badge4.default, function () {
  return _react2.default.createElement(_Badge2.default, { text: '10', info: true });
})).add('warning', (0, _storybookReadme.withReadme)(_Badge4.default, function () {
  return _react2.default.createElement(_Badge2.default, { text: '333', format: 'true', warning: true });
})).add('danger', (0, _storybookReadme.withReadme)(_Badge4.default, function () {
  return _react2.default.createElement(_Badge2.default, { text: '5', danger: true });
}));
//# sourceMappingURL=Badge.stories.js.map