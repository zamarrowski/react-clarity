'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _addonKnobs = require('@storybook/addon-knobs');

var _label = require('./label.md');

var _label2 = _interopRequireDefault(_label);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Label', module).addDecorator(_addonKnobs.withKnobs).add('simple', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    null,
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('purple', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { purple: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('blue', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { blue: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('orange', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { orange: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('lightBlue', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { lightBlue: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('info', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { info: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('success', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { success: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('warning', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { warning: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
})).add('error', (0, _storybookReadme.withReadme)(_label2.default, function () {
  return _react2.default.createElement(
    _Label2.default,
    { error: true },
    (0, _addonKnobs.text)('Label', 'Austin')
  );
}));
//# sourceMappingURL=Label.stories.js.map