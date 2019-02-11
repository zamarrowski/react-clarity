'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _storybookReadme = require('storybook-readme');

var _AlertReadme = require('./AlertReadme.md');

var _AlertReadme2 = _interopRequireDefault(_AlertReadme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Alert', module).addDecorator(_addonKnobs.withKnobs).add('standard success', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { standard: true, message: (0, _addonKnobs.text)('Label', 'Alert'), success: true });
})).add('standard info', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { standard: true, message: (0, _addonKnobs.text)('Label', 'Alert'), info: true });
})).add('standard warning', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { standard: true, message: (0, _addonKnobs.text)('Label', 'Alert'), warning: true });
})).add('standard error', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { standard: true, message: (0, _addonKnobs.text)('Label', 'Alert'), error: true });
}));

(0, _react3.storiesOf)('Alert app level', module).add('standard success', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { appLevel: true, message: (0, _addonKnobs.text)('Label', 'Alert'), success: true });
})).add('standard info', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { appLevel: true, message: (0, _addonKnobs.text)('Label', 'Alert'), info: true });
})).add('standard warning', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { appLevel: true, message: (0, _addonKnobs.text)('Label', 'Alert'), warning: true });
})).add('standard error', (0, _storybookReadme.withReadme)(_AlertReadme2.default, function () {
  return _react2.default.createElement(_Alert2.default, { appLevel: true, message: (0, _addonKnobs.text)('Label', 'Alert'), error: true });
}));
//# sourceMappingURL=Alert.stories.js.map