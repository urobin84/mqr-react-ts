import {getToken, saveToken} from "./jwt";

export const routeValidate = (root:boolean) => {
  if(root){ //for dashboard page
    const token = window.localStorage.getItem('id_token_hr');
    if (!token) {
      window.location.href = '/hr-vue/#/login';
    }else{
      saveToken(token);
    }
  }else{
    const token = getToken();
    if (!token) {
      window.location.href = '/hr-vue/#/login';
    }
  }
}
