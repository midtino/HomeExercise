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

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]
