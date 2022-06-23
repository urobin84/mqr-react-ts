export default interface BranchList {
  id: number;
  nama: string;
  kode_cabang: string;
}

export interface dataPostBranchListSearch {
  q: string;
  branchId: number;
}
