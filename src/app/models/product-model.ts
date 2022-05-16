// 인스턴스화 할 필요 없으면 굳이 class로 정의하지 않아도 된다!
export type ProductModel = {
  id: number;

  name: string;

  image?: string;

  price: number;

  brand: string;

  category: string;

  desc: string;

  // 좋아요 개수 (wishList)
  wishList: Array<number>;
};
