import { httpClient } from "../libs/http-client";

const userRepository = {
  signIn(data: { userId: string; password: string }) {
    return httpClient.post("/users/signin", data).then((res) => {
      return res;
    });
  },
  signUp(data: {
    userId: string;
    password: string;
    name: string;
    email: string;
  }) {
    return httpClient.post("/users/signup", data).then((res) => {
      return res;
    });
  },
  dataCheck(data: { target: string; value: string }) {
    return httpClient.post("/users/signup/check", data).then((res) => {
      return res;
    });
  },
};

export { userRepository };
