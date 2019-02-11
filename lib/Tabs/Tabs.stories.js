'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _addonKnobs = require('@storybook/addon-knobs');

var _tabs = require('./tabs.md');

var _tabs2 = _interopRequireDefault(_tabs);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabs = [{
  name: 'tab1',
  content: 'tab1 content'
}, {
  name: 'tab2',
  content: 'tab2 content'
}];

(0, _react3.storiesOf)('Tabs', module).addDecorator(_addonKnobs.withKnobs).add('simple', (0, _storybookReadme.withReadme)(_tabs2.default, function () {
  return _react2.default.createElement(_Tabs2.default, { tabs: (0, _addonKnobs.object)('Tabs', tabs) });
}));
//# sourceMappingURL=Tabs.stories.js.map