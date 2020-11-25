import React, { useReducer } from "react";
import axios from "axios";
import UsageContext from "./usageContext";
import UsageReducer from "./usageReducer";

import {
  USAGE_HISTORY,
  GET_USAGE_ERROR,
  GET_SECTION_VALUE,
  GET_SECTION_ERROR,
  CHANGE_SECTION_VALUE,
  CHANGE_SECTION_VALUE_ERROR
} from "../types";
import setAuthToken from "../../utils/setAuthToken";

const UsageState = (props) => {
  const initialState = {
    usageHistory: [],
    sectionValue: null,
    loading: true,
    loadingSectionValue: true
  };

  const [state, dispatch] = useReducer(UsageReducer, initialState);

  const getSectionSwitchValue = async (section) => {
    try {
      const config = {
        headers: {
          "X-AIO-Key": process.env.REACT_APP_AIO_KEY
        }
      };

      setAuthToken(undefined);

      const res = await axios.get(
        `https://io.adafruit.com/api/v2/alexriosj/feeds/control-1/data`,
        config
      );

      dispatch({
        type: GET_SECTION_VALUE,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: GET_SECTION_ERROR });
    }
  };

  const changeSwtichValue = async () => {
    try {
      const config = {
        headers: {
          "X-AIO-Key": process.env.REACT_APP_AIO_KEY,
          "Content-Type": "application/json"
        }
      };

      setAuthToken(undefined);

      const res = await axios.post(
        `https://io.adafruit.com/api/v2/alexriosj/feeds/control-1/data`,
        state.sectionValue.value === "ON" ? { value: "OFF" } : { value: "ON" },
        config
      );

      dispatch({
        type: CHANGE_SECTION_VALUE,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: CHANGE_SECTION_VALUE_ERROR });
    }
  };

  const getUsageHistory = async () => {
    try {
      const config = {
        headers: {
          "X-AIO-Key": process.env.REACT_APP_AIO_KEY
        }
      };

      setAuthToken(undefined);

      const res = await axios.get(
        "https://io.adafruit.com/api/v2/alexriosj/feeds/grafica-de-consumo/data",
        config
      );

      dispatch({
        type: USAGE_HISTORY,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: GET_USAGE_ERROR });
    }
  };

  return (
    <UsageContext.Provider
      value={{
        usageHistory: state.usageHistory,
        getUsageHistory,
        getSectionSwitchValue,
        changeSwtichValue,
        loading: state.loading,
        loadingSectionValue: state.loadingSectionValue,
        sectionValue: state.sectionValue
      }}
    >
      {props.children}
    </UsageContext.Provider>
  );
};

export default UsageState;
