import React from "react";
import { Link } from "react-router-dom";

import gif from "../layout/404-plug.gif";

const NotFound = () => {
  return (
    <div className="mt-4 text-center">
      <img src={gif} alt="404-plug" />
      <h1>Page Not Found</h1>
      <h4 className="text-muted mb-4">
        The page you are looking for does not exist.
      </h4>
      <h5 className="mt-4">
        <Link to="/">Back to Home Page</Link>
      </h5>
    </div>
  );
};

export default NotFound;
