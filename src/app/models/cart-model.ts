// 인스턴스화 할 필요 없으면 굳이 class로 정의하지 않아도 된다!
export type CartModel = {
  name: string;

  image: string;

  price: number;

  brand: string;

  quantity: number;

  size: "220" | "230" | "240" | "250" | "260" | "270" | "280" | "290";
};
