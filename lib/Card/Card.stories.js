'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('./../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Card', module).add('simple', function () {
  return _react2.default.createElement(
    _Card2.default,
    { title: 'My card' },
    'Content card'
  );
}).add('with actions', function () {
  return _react2.default.createElement(
    _Card2.default,
    { title: 'My card', actions: _react2.default.createElement(
        _Button2.default,
        null,
        'Button'
      ) },
    'Content card'
  );
}).add('with image', function () {
  return _react2.default.createElement(
    _Card2.default,
    { image: 'https://vmware.github.io/clarity/assets/images/documentation/cards/placeholder_350x150.png', title: 'My card', actions: _react2.default.createElement(
        _Button2.default,
        null,
        'Button'
      ) },
    'Content card'
  );
});
//# sourceMappingURL=Card.stories.js.map