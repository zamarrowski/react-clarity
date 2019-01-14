'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Modal', module).add('simple', function () {
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
});
//# sourceMappingURL=Modal.stories.js.map