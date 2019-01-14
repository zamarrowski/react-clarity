'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Header', module).add('simple', function () {
  return _react2.default.createElement(_Header2.default, { title: 'My Header' });
}).add('with buttons', function () {
  return _react2.default.createElement(_Header2.default, { title: 'My Header', navLinks: [{ text: 'Dashboard', link: '/', active: true }, { text: 'Interactive Analytics', link: '/ie' }] });
});
//# sourceMappingURL=Header.stories.js.map