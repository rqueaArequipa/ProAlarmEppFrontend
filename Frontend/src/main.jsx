import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Admin from "./layouts/Admin";
import Index from "./views";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <Admin {...props}/>} />
      <Redirect from="/admin" to="/admin/dashboard" />
      <Route path="/" render={() => <Index/>} />
    </Switch>
  </BrowserRouter>
);
