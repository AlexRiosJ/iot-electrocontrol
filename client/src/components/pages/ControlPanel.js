import React, { useContext } from "react";

import AuthContext from "../../context/auth/authContext";
import SectionSwitch from "./SectionSwitch";
import UsageChart from "./UsageChart";
import UsageGauge from "./UsageGauge";

const ControlPanel = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, token } = authContext;

  return (
    <div className="jumbotron">
      <h3 className="text-left">
        {isAuthenticated && token && user ? (
          "Control Panel"
        ) : (
          <div>
            <i className="fas fa-spinner fa-pulse" />
          </div>
        )}
      </h3>
      <div className="grid-3 text-center">
        <SectionSwitch title="Section 1" id={1} />
        <SectionSwitch title="Section 2" id={2} />
        <SectionSwitch title="Section 3" id={3} />
      </div>
      <div className="row">
        <div className="col-7">
          <UsageChart />
        </div>
        <div className="col-5">
          <UsageGauge />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
