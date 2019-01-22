'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _checkbox = require('./checkbox.md');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Checkbox', module).add('with text', (0, _storybookReadme.withReadme)(_checkbox2.default, function () {
  return _react2.default.createElement(_Checkbox2.default, { label: 'My checkbox' });
})).add('with checked', (0, _storybookReadme.withReadme)(_checkbox2.default, function () {
  return _react2.default.createElement(_Checkbox2.default, { label: 'My checkbox', checked: true });
})).add('with onCheck ', (0, _storybookReadme.withReadme)(_checkbox2.default, function () {
  return _react2.default.createElement(_Checkbox2.default, { onCheck: function onCheck(value) {
      return console.log(value);
    }, label: 'My checkbox' });
}));
//# sourceMappingURL=Checkbox.stories.js.map