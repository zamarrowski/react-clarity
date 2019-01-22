'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _dropdown = require('./dropdown.md');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = [{
  name: 'Action'
}, {
  name: 'Disabled Link',
  disabled: true
}];

(0, _react3.storiesOf)('Dropdown', module).add('with text', (0, _storybookReadme.withReadme)(_dropdown2.default, function () {
  return _react2.default.createElement(_Dropdown2.default, {
    headerName: 'Actions',
    actions: actions
  });
}));
//# sourceMappingURL=Dropdown.stories.js.map