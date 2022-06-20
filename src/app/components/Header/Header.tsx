import React, { ReactElement, useEffect, useState } from "react";
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
import { theme } from "../../../style";

const MenuItem = (props: {
  size?: string;
  weight?: string;
  paddingBottom?: string;
  children: ReactElement;
}) => {
  return (
    <Item
      size={props.size}
      weight={props.weight}
      hoverBorderBottom={`6px solid ${theme.mainColor}`}
      paddingBottom={props.paddingBottom ? props.paddingBottom : ""}
    >
      {props.children}
    </Item>
  );
};

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
  const isNotFound =
    ["/", "/signin", "/admin", "/cart", "/signup", "/products/:id"].indexOf(
      location
    ) === -1;

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

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

  return isScroll ||
    (isSearch && !isScroll) ||
    location === "/signin" ||
    location === "/admin" ||
    isNotFound ? (
    <Container
      position="sticky"
      top="0"
      borderBottom="2px solid rgba(0, 0, 0, 0.6)"
      transform="translateY(-125px)"
    >
      <FlexBox
        width="1024px"
        boxSizing="content-box"
        padding="0 0 23.6px 0"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <MenuList itemNum="8" columnGap="40px">
          <Path url="/" height="43.4px" margin={isSearch ? "0 0 2.5px 0" : ""}>
            <Image src={logo} width="154px" height="43.4px" alt="Tend로고" />
          </Path>
          {isSearch ? (
            <SearchInput
              type="text"
              placeholder="| Search"
              width="385px"
              height="43px"
              padding="8.9px 268px 8.5px 9.3px"
              radius="10px"
              border="solid 2px black"
            />
          ) : (
            <>
              <MenuItem size="25px" weight="600">
                <Path url="/" children="SHOES" height="40px" />
              </MenuItem>
              <MenuItem size="25px" weight="600">
                <Path url="/" children="HEADWEAR" height="40px" />
              </MenuItem>
              <MenuItem size="25px" weight="600">
                <Path url="/" children="WE'ARE" height="40px" />
              </MenuItem>
              <MenuItem size="12px" weight="500" paddingBottom="9px">
                <Path url="/" children="LOOKBOOK" />
              </MenuItem>
              <MenuItem size="12px" weight="500" paddingBottom="9px">
                <Path url="/" children="EVENT" />
              </MenuItem>
              {/* NOTE: 장바구니, 로그인 아이콘 위치 수정하기 */}
              <Path url="/cart">
                <Image
                  src={cart}
                  alt="장바구니"
                  height="24px"
                  width="24px"
                  margin="0 4px 0 0"
                />
              </Path>
              <Path url="/signin">
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
        </MenuList>
        <Button width="40px" height="40px" padding="0" onClick={handleSearch}>
          {isSearch ? (
            <Image
              src={close}
              width="40px"
              height="40px"
              alt="검색창닫기아이콘"
              margin="-12px 0 0 0"
            />
          ) : (
            <Image
              src={search}
              width="40px"
              height="40px"
              alt="검색아이콘"
              margin="-12px 0 0 0"
            />
          )}
        </Button>
      </FlexBox>
    </Container>
  ) : (
    <Container id="main">
      <FlexBox
        margin="33.4px 0 0 0"
        width="1024px"
        height="43.4px"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Path url="/" height="43.4px">
          <Image src={logo} width="154px" height="43.4px" alt="Tend로고" />
        </Path>
        <MenuList itemNum="4" height="43.4px" width="353px">
          <Item size="10px" weight="500" height="30px" width="80px">
            <Path url="/admin" text="MY PAGE">
              <Image
                src={mypage}
                alt="마이페이지"
                height="24px"
                width="24px"
                margin="0 4px 0 0"
              />
            </Path>
          </Item>
          <Item size="10px" weight="500" height="30px" width="80px">
            <Path url="/" text="MY HEART">
              <Image
                src={like}
                alt="찜한목록"
                height="24px"
                width="24px"
                margin="0 4px 0 0"
              />
            </Path>
          </Item>
          <Item size="10px" weight="500" height="30px" width="80px">
            <Path url="/cart" text="MY CART">
              <Image
                src={cart}
                alt="장바구니"
                height="24px"
                width="24px"
                margin="0 4px 0 0"
              />
            </Path>
          </Item>
          <Item size="10px" weight="500" height="30px">
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
          </Item>
        </MenuList>
      </FlexBox>
      <FlexBox
        margin="39.6px 0 0 0"
        width="1024px"
        height="auto"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <MenuList itemNum="5" columnGap="40px">
          <MenuItem size="39px" weight="600" paddingBottom="6px">
            <Path url="/" children="SHOES" height="40px" />
          </MenuItem>
          <MenuItem size="39px" weight="600" paddingBottom="6px">
            <Path url="/" children="HEADWEAR" height="40px" />
          </MenuItem>
          <MenuItem size="39px" weight="600" paddingBottom="6px">
            <Path url="/" children="WE'ARE" height="40px" />
          </MenuItem>
          <MenuItem size="18px" weight="500" paddingBottom="6px">
            <Path url="/" children="LOOKBOOK" />
          </MenuItem>
          <MenuItem size="18px" weight="500" paddingBottom="6px">
            <Path url="/" children="EVENT" />
          </MenuItem>
        </MenuList>
        <Button width="40px" height="40px" padding="0" onClick={handleSearch}>
          {isSearch ? (
            <Image
              src={close}
              width="40px"
              height="40px"
              alt="검색창닫기아이콘"
              margin="-12px 0 0 0"
            />
          ) : (
            <Image
              src={search}
              width="40px"
              height="40px"
              alt="검색아이콘"
              margin="-12px 0 0 0"
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
  z-index: 2;
  /* NOTE: 애니메이션 좀 생각해보기... 이게 최선인가.. 흠 */
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
  ${(props) => (props.transform ? `transform: ${props.transform};` : "")};
  ${(props) => (props.position ? `position: ${props.position};` : "")};
  ${(props) => (props.top ? `top: ${props.top};` : "")};
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""};
`;

const MenuList = styled.ul<{
  itemNum: string;
  width?: string;
  height?: string;
  columnGap?: string;
}>`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  ${(props) =>
    props.itemNum
      ? `grid-template-columns: repeat(${props.itemNum}, auto)`
      : ""};
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.height ? `height:${props.height}` : "")};
  ${(props) => (props.columnGap ? `column-gap:${props.columnGap}` : "")};
`;

const Item = styled.li<{
  size?: string;
  weight?: string;
  width?: string;
  height?: string;
  hoverBorderBottom?: string;
  paddingBottom?: string;
}>`
  width: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) =>
    props.paddingBottom ? `padding-bottom: ${props.paddingBottom}` : ""};
`;

const SearchInput = styled(Input)`
  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.mainColor};
    outline: ${(props) => `${props.theme.mainColor} solid 0.5px`};
  }
`;

export { Header };
