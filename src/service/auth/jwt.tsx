const SESSION_NAME = process.env.NEXT_PUBLIC_SESSION_NAME;
const ID_TOKEN_KEY = "id_token_"+SESSION_NAME;
const USER_DATA = "data_user_"+SESSION_NAME;
const MODULE_DATA = "data_module_"+SESSION_NAME;
const PROGRAM_DATA = "data_program"+SESSION_NAME;
const YEAR = new Date().getFullYear();

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token:string) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const getUser = () => {
  return window.localStorage.getItem(USER_DATA);
};

export const saveUser = (user:string) => {
  window.localStorage.setItem(USER_DATA, user);
};

export const destroyUser = () => {
  window.localStorage.removeItem(USER_DATA);
};

export const getModule = () => {
  return window.localStorage.getItem(MODULE_DATA);
};

export const saveModule = (module:string) => {
  window.localStorage.setItem(MODULE_DATA, module);
};

export const destroyModule = () => {
  window.localStorage.removeItem(MODULE_DATA);
};

export const getProgram = () => {
  return window.localStorage.getItem(PROGRAM_DATA);
};

export const saveProgram = (program:string) => {
  window.localStorage.setItem(PROGRAM_DATA, program);
};

export const destroyProgram = () => {
  window.localStorage.removeItem(PROGRAM_DATA);
};

export const getYear = () => {
  return YEAR;
};

export default {
  getToken,
  saveToken,
  destroyToken,
  getUser,
  saveUser,
  destroyUser,
  getModule,
  saveModule,
  destroyModule,
  getProgram,
  saveProgram,
  destroyProgram,
  getYear
};
