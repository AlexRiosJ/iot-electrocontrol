import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";

import setAuthToken from "./utils/setAuthToken";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";
import UsageState from "./context/usage/UsageState";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <UsageState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PrivateRoute exact path="/login" component={Login} />
                  <PrivateRoute exact path="/register" component={Register} />
                </Switch>
              </div>
              <Footer />
            </>
          </Router>
        </UsageState>
      </AlertState>
    </AuthState>
  );
};

export default App;
