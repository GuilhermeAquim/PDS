import axios, { AxiosError } from "axios";
import humps from "humps";

axios.interceptors.request.use(
  (config) => {
    let headers = config.headers || {};
    let transform = config.transformRequest
      ? Array.isArray(config.transformRequest)
        ? config.transformRequest
        : [config.transformRequest]
      : [];
    transform = [...transform, (data) => humps.decamelizeKeys(data)];
    config.transformRequest = transform;

    let transformResponse = config.transformResponse
      ? Array.isArray(config.transformResponse)
        ? config.transformResponse
        : [config.transformResponse]
      : [];
    transformResponse = [
      ...transformResponse,
      (data) => humps.camelizeKeys(data),
    ];
    config.transformResponse = transformResponse;

    headers = {
      ...headers,
      "session-token": `${localStorage.getItem("token")}`,
    } as any;
    config.headers = headers;
    // config.baseURL = process.env.REACT_APP_ENDPOINT_API;
    return config;
  },
  (error: AxiosError) => {
    if (error.code && +error.code === 401) {
      localStorage.removeItem("token");
    }
  }
);
