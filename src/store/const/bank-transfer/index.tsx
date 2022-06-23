import {ColumnTableBankTransferUpload} from "../../../interfaces/bank-transfer";

export const columnsTableBankTransferUpload: readonly ColumnTableBankTransferUpload[] = [
  { id: 'number', label: 'No.', minWidth: 45 },
  { id: 'bank', label: 'Bank', minWidth: 200 },
  {
    id: 'account',
    label: 'Account',
    minWidth: 160,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'file_name',
    label: 'File Name',
    minWidth: 200,
    align: 'left',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 90,
    align: 'center',
    format: (value: number) => value.toFixed(2)
  },
  {
    id: 'upload_date',
    label: 'Upload Date',
    minWidth: 160,
    align: 'center',
    format: (value: number) => value.toFixed(2)
  }
]
