import { atom } from "recoil";

export const bankSearchState = atom({
  key: "BankSearchState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const listBankState = atom({
  key: "listBankState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
