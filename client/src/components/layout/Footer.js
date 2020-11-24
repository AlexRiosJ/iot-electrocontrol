import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 text-center">
      <p className="text-muted">
        IoT Electrocontrol
        <span> &copy;</span> {new Date().getFullYear()}
      </p>
      <h3>
        <a href="https://www.github.com/alexriosj/iot-electrocontrol">
          <i className="fab fa-github" />
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
