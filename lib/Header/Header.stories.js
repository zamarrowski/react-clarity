'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _header = require('./header.md');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Header', module).add('simple', (0, _storybookReadme.withReadme)(_header2.default, function () {
  return _react2.default.createElement(_Header2.default, { title: 'My Header' });
})).add('with buttons', (0, _storybookReadme.withReadme)(_header2.default, function () {
  return _react2.default.createElement(_Header2.default, { title: 'My Header', navLinks: [{ text: 'Dashboard', link: '/', active: true }, { text: 'Interactive Analytics', link: '/ie' }] });
}));
//# sourceMappingURL=Header.stories.js.map