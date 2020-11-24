import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Alerts from "../layout/Alerts";

const Login = () => {
  const { setAlert, alerts } = useContext(AlertContext);
  const { loadUser, login, clearErrors, error } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields.", "danger");
    } else {
      await login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h2 className="mb-4">Login</h2>
        <Alerts />
        <div className="form-group has-danger">
          <label className="form-control-label" htmlFor="email">
            <span className={`${alerts.length > 0 ? "text-danger" : ""}`}>
              Email address
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className={`form-control ${alerts.length > 0 ? "is-invalid" : ""}`}
            value={email}
            onChange={onChange}
            id="email"
            required
          />
        </div>
        <div className="form-group has-danger">
          <label className="form-control-label" htmlFor="password">
            <span className={`${alerts.length > 0 ? "text-danger" : ""}`}>
              Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className={`form-control ${alerts.length > 0 ? "is-invalid" : ""}`}
            value={password}
            onChange={onChange}
            id="password"
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-secondary btn-block my-4"
        />
      </form>
      <p className="text-center">
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;
