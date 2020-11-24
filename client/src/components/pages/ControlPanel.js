import React, { useContext } from "react";

import AuthContext from "../../context/auth/authContext";

const ControlPanel = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, token } = authContext;

  return (
    <h3 className="mt-3">
      {isAuthenticated && token && user ? (
        "Control Panel"
      ) : (
        <div>
          <i className="fas fa-spinner fa-pulse" />
        </div>
      )}
    </h3>
  );
};

export default ControlPanel;
