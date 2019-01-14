'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Checkbox', module).add('with text', function () {
  return _react2.default.createElement(_Checkbox2.default, { label: 'My checkbox' });
});
//# sourceMappingURL=Checkbox.stories.js.map