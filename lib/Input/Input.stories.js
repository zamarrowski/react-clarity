'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _addonKnobs = require('@storybook/addon-knobs');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _input = require('./input.md');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = function Wrap(input) {
  return function () {
    return _react2.default.createElement(
      'div',
      { style: { maxWidth: "300px" } },
      input
    );
  };
};

(0, _react3.storiesOf)('Input', module).addDecorator(_addonKnobs.withKnobs).add('simple', (0, _storybookReadme.withReadme)(_input2.default, Wrap(_react2.default.createElement(_Input2.default, null)))).add('with label', (0, _storybookReadme.withReadme)(_input2.default, Wrap(_react2.default.createElement(_Input2.default, { label: 'Name' })))).add('with icon', (0, _storybookReadme.withReadme)(_input2.default, Wrap(_react2.default.createElement(_Input2.default, { icon: "ios-eye-outline", onIconClick: function onIconClick() {
    return alert("onIconClick cb!");
  } }))));
//# sourceMappingURL=Input.stories.js.map