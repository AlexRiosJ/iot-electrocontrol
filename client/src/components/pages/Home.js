import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

import ControlPanel from "./ControlPanel";
import Welcome from "./Welcome";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, isAuthenticated, loading, user } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading && isAuthenticated && user != null && user.hasDashboard ? (
        <ControlPanel />
      ) : (
        <Welcome />
      )}
    </>
  );
};

export default Home;
