import axios from "axios";
import {GlobalConstanta} from "../../store/const/GlobalConstanta";
import {destroyToken, getToken, saveToken} from "../auth/jwt";

//
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
const PATH_VERSION_API = process.env.NEXT_PUBLIC_PATH_VERSION_API;

const service = axios.create({
  baseURL: `${BASE_URL_API}${PATH_VERSION_API}`,
  timeout: GlobalConstanta.TIME_OUT_API,
  headers: {
    "Content-Type": "application/json",
  },
});

//we intercept every requests
service.interceptors.request.use(async function(config){
  //anything you want to attach to the requests such as token
  const token = getToken();
  if (token) {
    // @ts-ignore
    config.headers["Authorization"] = 'Bearer ' + token;  // for laravel api
  }

  return config;
}, error => {

  return Promise.reject(error)
})


// we intercept every response
service.interceptors.response.use(function(response){
  //anything you want to do with the response
  return response;
} , function(error){
  //anything you want to do with the error
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    return service.post('/refresh-token', {
      refresh_token: getToken()
    }).then(res => {
      saveToken(res.data.token);

      return service(originalRequest);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } ) .catch(error => {
      destroyToken();
      window.location.href = "/hr-vue/#/login";
    });
  }
} )

export default service;


