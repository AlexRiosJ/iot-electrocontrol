import React, { useEffect, useContext } from "react";

import UsageContext from "../../context/usage/usageContext";

import AuthContext from "../../context/auth/authContext";
import SectionSwitch from "./SectionSwitch";
import UsageChart from "./UsageChart";
import UsageGauge from "./UsageGauge";
import UsageLog from "./UsageLog";

const ControlPanel = () => {
  const authContext = useContext(AuthContext);
  const usageContext = useContext(UsageContext);

  const { isAuthenticated, user, token } = authContext;
  const { getUsageHistory, usageHistory, loading } = usageContext;

  useEffect(() => {
    getUsageHistory();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="jumbotron" style={{ padding: "2rem 2rem" }}>
      <div>
        {isAuthenticated && token && user ? (
          <>
            <button
              className="float-right btn btn-info"
              onClick={getUsageHistory}
            >
              <i className="fas fa-sync-alt" />
            </button>
            <h3 className="text-left">Control Panel</h3>
          </>
        ) : (
          <div>
            <i className="fas fa-spinner fa-pulse" />
          </div>
        )}
      </div>
      <div className="grid-3 text-center">
        <SectionSwitch title="Section 1" id={0} />
        <SectionSwitch title="Section 2" id={1} />
        <SectionSwitch title="Section 3" id={2} />
      </div>
      {!loading && (
        <>
          <div className="row">
            <div className="col-7">
              <UsageChart usageHistory={usageHistory} />
            </div>
            <div className="col-5">
              <UsageGauge min={0} max={2000} usageHistory={usageHistory} />
            </div>
          </div>
          <UsageLog usageHistory={usageHistory} />
        </>
      )}
    </div>
  );
};

export default ControlPanel;
