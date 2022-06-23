import {atom} from "recoil";

// ** dataTableUploadFileBankTrasfer
export const startRowState = atom({
  key: "StartRowTableUploadFileBankState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const pageState = atom({
  key: "PageTableUploadFileBankState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const totalRowState = atom({
  key: "TotalRowTableUploadFileBankState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const rowPerPageState = atom({
  key: "RowPerPageTableUploadFileBankState", // unique ID (with respect to other atoms/selectors)
  default: 10, // default value (aka initial value)
});

export const branchSearchState = atom({
  key: "BranchSearchTableUploadFileBankState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const statusBtnSearchState = atom({
  key: "StatusBtnSearchTableUploadFileBankState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});




