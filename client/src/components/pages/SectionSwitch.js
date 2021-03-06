import React, { useContext, useEffect } from "react";
import Switch from "react-switch";

import UsageContext from "../../context/usage/usageContext";

const SectionSwitch = ({ title, id }) => {
  const usageContext = useContext(UsageContext);

  const {
    getSectionSwitchValue,
    sectionValue,
    loadingSectionValue,
    changeSwtichValue
  } = usageContext;

  useEffect(() => {
    getSectionSwitchValue(id);
    // eslint-disable-next-line
  }, []);

  const onSwitchChange = () => {
    changeSwtichValue(id);
  };

  return (
    !loadingSectionValue[id] && (
      <div className="card section-switch-card" style={{ height: "10rem" }}>
        <h3>{title}</h3>
        <div className="d-flex justify-content-center">
          <Switch
            className="react-switch d-flex mb-1"
            onChange={onSwitchChange}
            onColor="#93c54b"
            offColor="#d9534f"
            checked={sectionValue[id].value === "ON"}
            checkedIcon={<div style={textStyle}>ON</div>}
            uncheckedIcon={<div style={textStyle}>OFF</div>}
            height={75}
            width={150}
            handleDiameter={63}
            required
          />
        </div>
        <small className="text-muted switch-date">
          {new Date(sectionValue[id].created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          })}
        </small>
      </div>
    )
  );
};

const textStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  fontSize: "24px",
  color: "white",
  paddingRight: "2px"
};

export default SectionSwitch;
