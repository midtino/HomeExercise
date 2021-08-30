import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
    Filter: ColumnFilter

  },
  {
    Header: 'Gas',
    Footer: 'GasCO',
    accessor: 'gasCO',
    sticky: 'left',
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'AmountCO',
    Footer: 'AmountCO',
    accessor: 'amountCO',
    sticky: 'left',
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Gas',
    Footer: 'Gas',
    accessor: 'gasCO2',
    sticky: 'left',
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Amount CO-2',
    Footer: 'AmountCO-2',
    accessor: 'amountCO2',
    sticky: 'left',
    Filter: ColumnFilter,
    disableFilters: true
  },
]

