'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _spinner = require('./spinner.md');

var _spinner2 = _interopRequireDefault(_spinner);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Spinner', module).add('simple', (0, _storybookReadme.withReadme)(_spinner2.default, function () {
  return _react2.default.createElement(_Spinner2.default, null);
}));
//# sourceMappingURL=Spinner.stories.js.map