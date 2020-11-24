import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

import ControlPanel from "./ControlPanel";
import Welcome from "./Welcome";
import Footer from "../layout/Footer";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, isAuthenticated, loading } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isAuthenticated && !loading ? <ControlPanel /> : <Welcome />}
      <Footer />
    </>
  );
};

export default Home;
