'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _progressbar = require('./progressbar.md');

var _progressbar2 = _interopRequireDefault(_progressbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Progress bar', module).add('simple', (0, _storybookReadme.withReadme)(_progressbar2.default, function () {
  return _react2.default.createElement(_ProgressBar2.default, { max: 100, value: 50 });
})).add('title', (0, _storybookReadme.withReadme)(_progressbar2.default, function () {
  return _react2.default.createElement(_ProgressBar2.default, { max: 100, value: 75, title: 'Progress bar' });
})).add('danger', (0, _storybookReadme.withReadme)(_progressbar2.default, function () {
  return _react2.default.createElement(_ProgressBar2.default, { danger: true, max: 100, value: 75, title: 'Progress bar' });
})).add('success', (0, _storybookReadme.withReadme)(_progressbar2.default, function () {
  return _react2.default.createElement(_ProgressBar2.default, { success: true, max: 100, value: 75, title: 'Progress bar' });
}));
//# sourceMappingURL=ProgressBar.stories.js.map