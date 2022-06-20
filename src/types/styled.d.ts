import { Theme } from "../style";
import { CSSProp } from "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
// NOTE: 아래 사이트 참고. 아직 왜 사용해야하는지 제대로 모름. 다시 확인하기.
// https://flamingotiger.github.io/style/styled-components-typescript/
