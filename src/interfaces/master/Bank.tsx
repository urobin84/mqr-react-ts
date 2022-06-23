export default interface BankList {
  id: number;
  bank: string;
  keterangan: string;
  kode_bank: string;
}

export interface dataPostBankListSearch {
  q: string;
}
