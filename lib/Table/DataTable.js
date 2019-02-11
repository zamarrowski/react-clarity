'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

exports.default = function (props) {
  return _react2.default.createElement(
    _Table2.default,
    { style: props.tableStyles },
    _react2.default.createElement(
      _TableHeader2.default,
      { style: props.headerStyles },
      _react2.default.createElement(
        _TableRow2.default,
        { style: props.trStyles },
        Object.keys(props.data[0]).map(function (element, key) {
          return _react2.default.createElement(
            _TableCellHeader2.default,
            { style: props.thStyles, key: key },
            element
          );
        })
      )
    ),
    _react2.default.createElement(
      _TableBody2.default,
      { style: props.tbodyStyles },
      props.data.map(function (element, key) {
        return _react2.default.createElement(
          _TableRow2.default,
          { style: props.trStyles, key: key },
          Object.values(element).map(function (value, index) {
            return _react2.default.createElement(
              _TableCell2.default,
              { style: props.tdStyles, key: key + '+' + index },
              value
            );
          })
        );
      })
    )
  );
};

module.exports = exports['default'];
//# sourceMappingURL=DataTable.js.map