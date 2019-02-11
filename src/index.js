import MetropolisRegular from './MetropolisRegular.otf'
import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: MetropolisRegular;
    src: url(${MetropolisRegular});
  }
`

export { default as Alert } from './Alert/Alert.js'
export { default as Badge } from './Badge/Badge.js'
export { default as Button } from './Button/Button'
export { default as Card } from './Card/Card'
export { default as Checkbox } from './Checkbox/Checkbox'
export { default as Dropdown } from './Dropdown/Dropdown'
export { default as Header } from './Header/Header'
export { default as Input } from './Input/Input'
export { default as Label } from './Label/Label'
export { default as Modal } from './Modal/Modal'
export { default as Password } from './Password/Password'
export { default as ProgressBar } from './ProgressBar/ProgressBar'
export { default as Spinner } from './Spinner/Spinner'
export { default as DataTable } from './Table/DataTable'
export { default as Table } from './Table/Table'
export { default as TableHeader } from './Table/TableHeader'
export { default as TableRow } from './Table/TableRow'
export { default as TableCellHeader } from './Table/TableCellHeader'
export { default as TableBody } from './Table/TableBody'
export { default as TableCell } from './Table/TableCell'
export { default as Tabs } from './Tabs/Tabs'
