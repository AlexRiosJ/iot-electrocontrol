import React from "react";
import { withRouter } from "react-router-dom";

const PricingPlans = (props) => {
  const redirectRegister = () => {
    props.history.push("/register");
  };

  return (
    <div className="grid-3 text-center">
      <div className="card">
        <h3 className="text-success">Begginer</h3>
        <h1 className="mb-0" style={{ fontSize: "400%" }}>
          $15
        </h1>
        <small>Montly</small>
        <br />
        <p>Start to control and calculate your electric usage.</p>
        <button className="btn btn-success" onClick={redirectRegister}>
          Select
        </button>
        <hr />
        <p>2 Sections</p>
        <p>Weekly Usage History</p>
        <p>Control Panel</p>
      </div>
      <div className="card">
        <h3 className="text-info">Pro</h3>
        <h1 className="mb-0" style={{ fontSize: "400%" }}>
          $25
        </h1>
        <small>Montly</small>
        <br />
        <p>Add more sections to your control panel.</p>
        <button className="btn btn-info" onClick={redirectRegister}>
          Select
        </button>
        <hr />
        <p>3 Sections</p>
        <p>Monthly Usage History</p>
        <p>Control Panel</p>
      </div>
      <div className="card">
        <h3 className="text-warning">VIP</h3>
        <h1 className="mb-0" style={{ fontSize: "400%" }}>
          $35
        </h1>
        <small>Montly</small>
        <br />
        <p>Full package best for any purposes.</p>
        <button className="btn btn-warning" onClick={redirectRegister}>
          Select
        </button>
        <hr />
        <p>+4 Sections</p>
        <p>Annual Usage History</p>
        <p>Control Panel</p>
      </div>
    </div>
  );
};

export default withRouter(PricingPlans);
