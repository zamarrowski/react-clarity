'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _Password = require('./Password');

var _Password2 = _interopRequireDefault(_Password);

var _password = require('./password.md');

var _password2 = _interopRequireDefault(_password);

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

(0, _react3.storiesOf)('Password', module).add('simple', (0, _storybookReadme.withReadme)(_password2.default, Wrap(_react2.default.createElement(_Password2.default, null))));
//# sourceMappingURL=password.stories.js.map