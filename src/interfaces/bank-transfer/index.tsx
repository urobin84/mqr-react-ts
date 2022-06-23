
interface ColumnTableBankTransferUpload {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

interface DataTableBankTransferUpload {
  number: string;
  bank: string;
  account: string;
  link_file: string;
  file_name: string;
  status: string;
  notes: string;
  upload_date: string;
}

interface DataTableUploadFileBankTransferRecordPayload {
  start: number;
  length: number;
  foundationId: string | number;
  bankId: string | number;
  branchId: string | number;
  accountBankId: string | number;
  dateRange: string;
}

export type {ColumnTableBankTransferUpload, DataTableBankTransferUpload, DataTableUploadFileBankTransferRecordPayload};
