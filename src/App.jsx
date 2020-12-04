import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
