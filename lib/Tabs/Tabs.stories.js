'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Tabs', module).add('simple', function () {
  return _react2.default.createElement(_Tabs2.default, { tabs: [{
      name: 'yep',
      content: 'tumami'
    }, {
      name: 'lol',
      content: 'tupapi'
    }] });
});
//# sourceMappingURL=Tabs.stories.js.map