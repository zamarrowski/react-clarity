import React from 'react'
import Table from './Table'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableCellHeader from './TableCellHeader'
import TableBody from './TableBody'
import TableCell from './TableCell'

export default props =>
  <Table style={props.tableStyles}>
    <TableHeader style={props.headerStyles}>
      <TableRow style={props.trStyles}>
          {Object.keys(props.data[0]).map((element, key) => (
            <TableCellHeader style={props.thStyles} key={key}>{element}</TableCellHeader>
          ))}
        </TableRow>
    </TableHeader>
    <TableBody style={props.tbodyStyles}>
      {props.data.map((element, key) => (
        <TableRow style={props.trStyles} key={key}>
          {Object.values(element).map((value, index) => (
            <TableCell style={props.tdStyles} key={`${key}+${index}`}>{value}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>