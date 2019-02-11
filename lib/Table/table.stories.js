'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _table = require('./table.md');

var _table2 = _interopRequireDefault(_table);

var _DataTable = require('./DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCellHeader = require('./TableCellHeader');

var _TableCellHeader2 = _interopRequireDefault(_TableCellHeader);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = [_defineProperty({
  decimal: 1,
  hexadecimal: 1,
  binary: 1
}, 'Roman Numeral', 'I'), _defineProperty({
  decimal: 5,
  hexadecimal: 5,
  binary: 101
}, 'Roman Numeral', 'V'), _defineProperty({
  decimal: 10,
  hexadecimal: 'A',
  binary: 1010
}, 'Roman Numeral', 'X'), _defineProperty({
  decimal: 15,
  hexadecimal: 'F',
  binary: 1111
}, 'Roman Numeral', 'XV')];

(0, _react3.storiesOf)('Table', module).add('simple', (0, _storybookReadme.withReadme)(_table2.default, function () {
  return _react2.default.createElement(_DataTable2.default, { data: data });
})).add('custom', (0, _storybookReadme.withReadme)(_table2.default, function () {
  return _react2.default.createElement(
    _Table2.default,
    null,
    _react2.default.createElement(
      _TableHeader2.default,
      null,
      _react2.default.createElement(
        _TableRow2.default,
        null,
        _react2.default.createElement(
          _TableCellHeader2.default,
          null,
          'Name'
        ),
        _react2.default.createElement(
          _TableCellHeader2.default,
          null,
          'Firstname'
        )
      )
    ),
    _react2.default.createElement(
      _TableBody2.default,
      null,
      _react2.default.createElement(
        _TableRow2.default,
        null,
        _react2.default.createElement(
          _TableCell2.default,
          null,
          'Sergio'
        ),
        _react2.default.createElement(
          _TableCell2.default,
          null,
          'Zamarrowski'
        )
      )
    )
  );
}));
//# sourceMappingURL=table.stories.js.map