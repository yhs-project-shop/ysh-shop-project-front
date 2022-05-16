import React, { useEffect, useState } from "react";
import { userActions } from "../../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../Button";
import { RootState } from "../../redux/configStore";
import { FlexBox } from "../FlexBox";
import { Path } from "../Path";
import { Image } from "../Image";
import logo from "../../../assets/logo.png";
import search from "../../../assets/icon_search.png";
import cart from "../../../assets/icon_cart.png";
import like from "../../../assets/icon_like.png";
import profile from "../../../assets/icon_profile.png";
import signin from "../../../assets/icon_signin.png";

function Header() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.user.is_login);

  // state, ref, querystring hooks
  const [loginState, setLoginState] = useState(false);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    setLoginState(isLogin);
    console.log("유즈이펙 안에서 isLogin: ", isLogin);
  }, [isLogin]);

  // handlers
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(userActions.signOut());
    alert("로그아웃 되었습니다!");
  };

  console.log("헤더에서 로그인 상태: ", isLogin);

  return (
    <FlexBox direction="column" height="200px" alignItems="center">
      <FlexBox
        margin="30px 0 0 0"
        width="1000px"
        height="auto"
        justifyContent="space-between"
      >
        <Image src={logo} width="154px" alt="Tend로고" />
        <MenuList itemNum="4">
          <MenuItem size="10px" weight="500" height="20px">
            <Path to="/" children="MY PAGE" />
          </MenuItem>
          <MenuItem size="10px" weight="500" height="20px">
            <Path to="/" children="MY HEART" />
          </MenuItem>
          <MenuItem size="10px" weight="500" height="20px">
            <Path to="/" children="MY CART" />
          </MenuItem>
          <MenuItem size="10px" weight="500" height="20px">
            {loginState ? (
              <Button
                width="70px"
                height="30px"
                backgroundColor="#a374db"
                onClick={handleLogout}
              >
                로그아웃
              </Button>
            ) : (
              <Path to="/signin" children="LOGIN" />
            )}
          </MenuItem>
        </MenuList>
      </FlexBox>
      <FlexBox
        margin="10px 0 0 0"
        width="1000px"
        height="auto"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <MenuList itemNum="5">
          <MenuItem size="39px" weight="600">
            <Path to="/" children="SHOES" height="50px" />
          </MenuItem>
          <MenuItem size="39px" weight="600">
            <Path to="/" children="HEADWEAR" height="50px" />
          </MenuItem>
          <MenuItem size="39px" weight="600">
            <Path to="/" children="WE'ARE" height="50px" />
          </MenuItem>
          <MenuItem size="18px" weight="500">
            <Path to="/" children="LOOKBOOK" />
          </MenuItem>
          <MenuItem size="18px" weight="500">
            <Path to="/" children="EVENT" />
          </MenuItem>
        </MenuList>
        <Image src={search} width="50px" height="50px" alt="검색아이콘" />
      </FlexBox>
    </FlexBox>
  );
}

const MenuList = styled.ul<{ itemNum: string }>`
  display: grid;
  ${(props) =>
    props.itemNum
      ? `grid-template-columns: repeat(${props.itemNum}, auto)`
      : ""};
  grid-template-rows: 60px 1fr;
  margin: 0;
  padding: 0;
  column-gap: 40px;
  list-style: none;
`;

const MenuItem = styled.li<{
  size?: string;
  weight?: string;
  height?: string;
}>`
  display: flex;
  align-items: flex-end;
  ${(props) => (props.size ? `font-size: ${props.size}` : "")};
  ${(props) => (props.weight ? `font-weight: ${props.weight}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
`;

export { Header };
