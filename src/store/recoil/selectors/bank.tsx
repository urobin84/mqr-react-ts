import { selector } from "recoil";
import {listBankState, nameState} from "../atoms/bank";

export const helloState = selector({
  key: "helloState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const name = get(nameState);
    const hello = "hello " + name;
    
return hello;
  },
});

