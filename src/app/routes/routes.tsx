import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux/configStore";
import {
  HomeScreen,
  AdminScreen,
  CartsScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
  NotFoundScreen,
  ShoesScreen,
} from "../screens";
import { Header } from "../components";

function AppRouter() {
  return (
    // 원래 BrowserRouter와 Route를 사용해서 컴포넌트에 주입하던 history를
    // ConnectedRouter를 사용해서 리덕스와 같은 history를 사용하도록 해줌!
    <ConnectedRouter history={history}>
      <Header />
      <div id="content">
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/admin" component={AdminScreen} />
          <Route path="/cart" component={CartsScreen} />
          <Route path="/shoes" component={ShoesScreen} />
          <Route path="/products/:id" component={ProductsScreen} />
          <Route path="/signin" component={SignInScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export { AppRouter };
