import axios from "axios";
import { API_ENDPOINT } from "../../configs";

export const httpClient = (() => {
  const instance = axios.create({
    // 기본적으로 우리가 바라볼 서버의 주소
    baseURL: API_ENDPOINT,
    //cors에러를 방지하기 위해서 추가.
    withCredentials: false,
    headers: { "Access-Control-Allow-Origin": "*" },
  });

  let _accessToken = "";

  // request interceptors
  axios.interceptors.request.use((config: any) => {
    if (_accessToken) {
      config.headers.Authorization = _accessToken;
    }
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers.Accept = "application/json";
    return config;
  });

  // response interceptors
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err?.response?.status === 401) {
        _accessToken = "";
      }
      return Promise.reject(err);
    }
  );

  return {
    async get<T>(url: string): Promise<T> {
      return await instance.get(url);
    },
    async post<T>(
      url: string,
      data: Record<string, string | number>
    ): Promise<T> {
      console.log("httpclient에 넘어온 값:", url, data);
      return await instance.post(url, data);
    },
    async delete<T>(url: string): Promise<T> {
      return await instance.delete(url);
    },
    async patch<T>(
      url: string,
      data: Record<string, string | number>
    ): Promise<T> {
      return await instance.patch(url, data);
    },
  };
})();
