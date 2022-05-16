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

// baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
// http://localhost:4000/ + 내가 작성한 url 즉 예시로
// getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
// get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

// 게시물 불러오기
// getProduct: () => instance.get("/posts"),
// 게시물 작성하기
// createProduct: (contents: ProductModel) => instance.post("/posts", contents),
// 게시물 수정하기
// editProduct: (id: number, content: ProductModel) =>
// instance.put(`/posts/${id}`, content),
// 게시물 삭제하기
// delProduct: (id: number) => instance.delete(`/posts/${id}`),
