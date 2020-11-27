import React from "react";
import { withRouter } from "react-router-dom";

const PricingPlans = (props) => {
  const redirectRegister = () => {
    if (props.isAuthenticated) {
      alert(
        "This is just a demo. Contact an admin to be able to access to the dashboard view."
      );
    } else {
      props.history.push("/register");
    }
  };

  return (
    <div className="grid-3 text-center">
      <div className="card border-success">
        <h3 className="text-success">Beginner</h3>
        <h1 className="mb-0" style={{ fontSize: "400%" }}>
          $15
        </h1>
        <small>Monthly</small>
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
      <div className="card border-info">
        <h3 className="text-info">Pro</h3>
        <h1 className="mb-0" style={{ fontSize: "400%" }}>
          $25
        </h1>
        <small>Monthly</small>
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
      <div className="card border-warning">
        <h3 className="text-warning">VIP</h3>
        <h1 className="mb-0" style={{ fontSize: "400%" }}>
          $35
        </h1>
        <small>Monthly</small>
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
