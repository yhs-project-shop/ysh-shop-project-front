import React, { useEffect, useState } from "react";
import { userActions } from "../../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../Button";
import { RootState } from "../../redux/configStore";
import { FlexBox } from "../FlexBox";
import { Path } from "../Path";
import { Image } from "../Image";
import { Input } from "../Input";
import logo from "../../../assets/logo.webp";
import search from "../../../assets/icon_search.webp";
import close from "../../../assets/icon_close.webp";
import mypage from "../../../assets/icon_profile.webp";
import like from "../../../assets/icon_like.webp";
import cart from "../../../assets/icon_cart.webp";
import signin from "../../../assets/icon_signin.webp";

function Header() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.user.is_login);
  const router = useSelector((state: RootState) => state.router);

  // state, ref, querystring hooks
  const [location, setLocation] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    setLoginState(isLogin);
  }, [isLogin]);

  useEffect(() => {
    setLocation(router.location.pathname);
  }, [router.location.pathname]);

  // handlers
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(userActions.signOut());
  };

  const handleScroll = (e: any) => {
    let scrollY = window.pageYOffset;
    if (scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const handleSearch = (e: any) => {
    if (!isSearch) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return isScroll || (isSearch && !isScroll) || location === "/signin" ? (
    <Container
      position="sticky"
      top="0"
      borderBottom="2px solid rgba(0, 0, 0, 0.6)"
      transform="translateY(-100px)"
    >
      <FlexBox
        width="1200px"
        boxSizing="content-box"
        padding="0 0 23.6px 0"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <MenuList itemNum="6" width="990px">
          <Path url="/" height="43.4px">
            <Image src={logo} width="154px" height="43.4px" alt="Tend로고" />
          </Path>
          {isSearch ? (
            <>
              <SearchInput
                type="text"
                placeholder="| Search"
                width="385px"
                height="43px"
                padding="8.9px 268px 8.5px 9.3px"
                radius="10px"
                border="solid 2px black"
                margin="2px 0 0 0"
              />
            </>
          ) : (
            <>
              <MenuItem
                size="39px"
                weight="600"
                hoverBorderBottom="6px solid #7001f7"
              >
                <Path url="/" children="SHOES" height="40px" />
              </MenuItem>
              <MenuItem
                size="39px"
                weight="600"
                hoverBorderBottom="6px solid #7001f7"
              >
                <Path url="/" children="HEADWEAR" height="40px" />
              </MenuItem>
              <MenuItem
                size="39px"
                weight="600"
                hoverBorderBottom="6px solid #7001f7"
              >
                <Path url="/" children="WE'ARE" height="40px" />
              </MenuItem>
              <MenuItem
                size="18px"
                weight="500"
                hoverBorderBottom="6px solid #7001f7"
              >
                <Path url="/" children="LOOKBOOK" />
              </MenuItem>
              <MenuItem
                size="18px"
                weight="500"
                hoverBorderBottom="6px solid #7001f7"
              >
                <Path url="/" children="EVENT" />
              </MenuItem>
            </>
          )}
        </MenuList>
        <Button
          width="40px"
          height="40px"
          margin="0 0 10px 0"
          padding="0"
          onClick={handleSearch}
        >
          {isSearch ? (
            <Image
              src={close}
              width="40px"
              height="40px"
              alt="검색창닫기아이콘"
              margin="0 0 12px 0"
            />
          ) : (
            <Image
              src={search}
              width="40px"
              height="40px"
              alt="검색아이콘"
              margin="0 0 12px 0"
            />
          )}
        </Button>
      </FlexBox>
    </Container>
  ) : (
    <Container id="main">
      <FlexBox
        margin="50px 0 0 0"
        width="1200px"
        height="auto"
        justifyContent="space-between"
      >
        <Path url="/" height="43.4px">
          <Image src={logo} width="154px" height="43.4px" alt="Tend로고" />
        </Path>
        <MenuList itemNum="4">
          <MenuItem size="10px" weight="500" height="30px">
            <Path url="/" text="MY PAGE">
              <Image
                src={mypage}
                alt="마이페이지"
                height="24px"
                width="24px"
                margin="0 4px 0 0"
              />
            </Path>
          </MenuItem>
          <MenuItem size="10px" weight="500" height="30px">
            <Path url="/" text="MY HEART">
              <Image
                src={like}
                alt="찜한목록"
                height="24px"
                width="24px"
                margin="0 4px 0 0"
              />
            </Path>
          </MenuItem>
          <MenuItem size="10px" weight="500" height="30px">
            <Path url="/" text="MY CART">
              <Image
                src={cart}
                alt="장바구니"
                height="24px"
                width="24px"
                margin="0 4px 0 0"
              />
            </Path>
          </MenuItem>
          <MenuItem size="10px" weight="500" height="30px">
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
              <>
                <Path url="/signin" text="LOGIN">
                  <Image
                    src={signin}
                    alt="로그인"
                    height="24px"
                    width="24px"
                    margin="0 4px 0 0"
                  />
                </Path>
              </>
            )}
          </MenuItem>
        </MenuList>
      </FlexBox>
      <FlexBox
        margin="39.6px 0 0 0"
        width="1200px"
        height="auto"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <MenuList itemNum="5">
          <MenuItem
            size="39px"
            weight="600"
            hoverBorderBottom="6px solid #7001f7"
          >
            <Path url="/" children="SHOES" height="40px" />
          </MenuItem>
          <MenuItem
            size="39px"
            weight="600"
            hoverBorderBottom="6px solid #7001f7"
          >
            <Path url="/" children="HEADWEAR" height="40px" />
          </MenuItem>
          <MenuItem
            size="39px"
            weight="600"
            hoverBorderBottom="6px solid #7001f7"
          >
            <Path url="/" children="WE'ARE" height="40px" />
          </MenuItem>
          <MenuItem
            size="18px"
            weight="500"
            hoverBorderBottom="6px solid #7001f7"
          >
            <Path url="/" children="LOOKBOOK" />
          </MenuItem>
          <MenuItem
            size="18px"
            weight="500"
            hoverBorderBottom="6px solid #7001f7"
          >
            <Path url="/" children="EVENT" />
          </MenuItem>
        </MenuList>
        <Button
          width="40px"
          height="40px"
          margin="0 0 10px 0"
          padding="0"
          onClick={handleSearch}
        >
          {isSearch ? (
            <Image
              src={close}
              width="40px"
              height="40px"
              alt="검색창닫기아이콘"
              margin="0 0 12px 0"
            />
          ) : (
            <Image
              src={search}
              width="40px"
              height="40px"
              alt="검색아이콘"
              margin="0 0 12px 0"
            />
          )}
        </Button>
      </FlexBox>
    </Container>
  );
}

const Container = styled.div<{
  position?: string;
  top?: string;
  borderBottom?: string;
  transform?: string;
}>`
  height: 220px;
  background-color: white;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  /* NOTE: 애니메이션 좀 생각해보기... 이게 최선인가.. 흠 */
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  ${(props) => (props.transform ? `transform: ${props.transform};` : "")};
  ${(props) => (props.position ? `position: ${props.position};` : "")};
  ${(props) => (props.top ? `top: ${props.top};` : "")};
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""};
`;

const MenuList = styled.ul<{ itemNum: string; width?: string }>`
  display: grid;
  ${(props) =>
    props.itemNum
      ? `grid-template-columns: repeat(${props.itemNum}, auto)`
      : ""};
  ${(props) => (props.width ? `width:${props.width}` : "")};
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
  hoverBorderBottom?: string;
}>`
  width: auto;
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px;
  border-bottom: 6px solid transparent;
  &:hover {
    ${(props) =>
      props.hoverBorderBottom
        ? `border-bottom: ${props.hoverBorderBottom}`
        : ""};
  }
  ${(props) => (props.size ? `font-size: ${props.size}` : "")};
  ${(props) => (props.weight ? `font-weight: ${props.weight}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
`;

const SearchInput = styled(Input)`
  &:hover,
  &:focus {
    border-color: #7001f7;
    outline: #7001f7 solid 0.5px;
  }
`;

export { Header };
