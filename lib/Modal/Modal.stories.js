'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _modal = require('./modal.md');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Modal', module).add('simple', (0, _storybookReadme.withReadme)(_modal2.default, function () {
  return _react2.default.createElement(
    _Modal2.default,
    { title: 'Modal', show: true, actions: _react2.default.createElement(
        _Button2.default,
        null,
        'Close modal'
      ) },
    _react2.default.createElement(
      'h3',
      null,
      'Form'
    )
  );
}));
//# sourceMappingURL=Modal.stories.js.map