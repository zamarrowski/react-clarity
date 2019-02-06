'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _addonKnobs = require('@storybook/addon-knobs');

var _button = require('./button.md');

var _button2 = _interopRequireDefault(_button);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Buttons outline', module).addDecorator(_addonKnobs.withKnobs).add('regular', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    null,
    (0, _addonKnobs.text)('Label', 'My button')
  );
})).add('success', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { success: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
})).add('warning', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { warning: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
})).add('disabled', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { disabled: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
}));

(0, _react3.storiesOf)('Buttons solid', module).add('regular', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
})).add('success', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true, success: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
})).add('warning', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true, warning: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
})).add('disabled', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true, disabled: true },
    (0, _addonKnobs.text)('Label', 'My button')
  );
}));
//# sourceMappingURL=Button.stories.js.map