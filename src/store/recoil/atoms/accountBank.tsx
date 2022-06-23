import {atom} from "recoil";

export const accountBankSearchState = atom({
  key: "AccountBankState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
