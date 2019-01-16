'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Input', module).add('simple', function () {
  return _react2.default.createElement(_Input2.default, null);
}).add('with label', function () {
  return _react2.default.createElement(_Input2.default, { label: 'Name' });
});
//# sourceMappingURL=Input.stories.js.map