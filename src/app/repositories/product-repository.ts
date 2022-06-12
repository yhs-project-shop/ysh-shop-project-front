import { httpClient } from "../libs/http-client";

const productRepository = {
  add(data: {}) {
    return httpClient.post("/products", data).then((res) => {
      return res;
    });
  },
  delete(productId: number) {
    return httpClient.delete(`/products?productId=${productId}`).then((res) => {
      return res;
    });
  },
  getAll() {
    return httpClient.get(`/products`).then((res) => {
      return res;
    });
  },
  getOne(productId: number) {
    return httpClient.get(`/products/detail/${productId}`).then((res) => {
      return res;
    });
  },
};

export { productRepository };
