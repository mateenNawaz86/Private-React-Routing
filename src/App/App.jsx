import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../Components/Landing/LandingPage";
import UserLogin from "../Components/User/UserLogin";
import UserRes from "../Components/User/UserRes";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminRes from "../Components/Admin/AdminRes";
import SadminLogin from "../Components/Super-Admin/SadminLogin";
import SadminRes from "../Components/Super-Admin/SadminRes";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="landing_page">
        <Switch>
          <Route path="/" component={LandingPage} exact />
        </Switch>
      </div>

      <section className="login__Card">
        <Switch>
          <Route path="/user-login" component={UserLogin} exact />
          <Route path="/user-response" component={UserRes} exact />
        </Switch>
      </section>

      <section className="login__Card">
        <Switch>
          <Route path="/admin-login" component={AdminLogin} exact />
          <Route path="/admin-response" component={AdminRes} exact />
        </Switch>
      </section>

      <section className="login__Card">
        <Switch>
          <Route path="/super-admin-login" component={SadminLogin} exact />
          <Route path="/super-admin-response" component={SadminRes} exact />
        </Switch>
      </section>
    </>
  );
};

export default App;
