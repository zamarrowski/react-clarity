import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Readme from './table.md'
import DataTable from './DataTable'
import Table from './Table'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableCellHeader from './TableCellHeader'
import TableBody from './TableBody'
import TableCell from './TableCell'

const data = [
  {
    decimal: 1,
    hexadecimal: 1,
    binary: 1,
    ['Roman Numeral']: 'I'
  },
  {
    decimal: 5,
    hexadecimal: 5,
    binary: 101,
    ['Roman Numeral']: 'V'
  },
  {
    decimal: 10,
    hexadecimal: 'A',
    binary: 1010,
    ['Roman Numeral']: 'X'
  },
  {
    decimal: 15,
    hexadecimal: 'F',
    binary: 1111,
    ['Roman Numeral']: 'XV'
  }
]


storiesOf('Table', module)
  .add('simple', withReadme(Readme, () => <DataTable data={data} />))
  .add('custom', withReadme(Readme, () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>Firstname</TableCellHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sergio</TableCell>
          <TableCell>Zamarrowski</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )))
