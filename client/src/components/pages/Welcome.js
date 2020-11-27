import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../layout/Logo";
import PricingPlans from "../layout/PricingPlans";

const Welcome = (props) => {
  const redirectRegister = () => {
    props.history.push("/register");
  };

  const redirectLogin = () => {
    props.history.push("/login");
  };

  return (
    <>
      <div className="form-container">
        {!props.isAuthenticated ? (
          <>
            <Logo />
            <h1 className="mt-4" style={{ fontSize: "300%" }}>
              IoT Electrocontrol
            </h1>
          </>
        ) : (
          <h1 className="mt-4 mb-0" style={{ fontSize: "300%" }}>
            Select your plan!
          </h1>
        )}
      </div>
      <PricingPlans isAuthenticated={props.isAuthenticated}/>
      {!props.isAuthenticated && (
        <div className="form-container">
          <h2 className="text-center">
            Create an account for <span className="text-success">free</span>{" "}
            today!
          </h2>
          <div className="card">
            <h3 className="text-center">Do you have an account already?</h3>
            <br />
            <div className="grid-2">
              <button className="btn btn-success" onClick={redirectRegister}>
                Register
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={redirectLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Welcome);
