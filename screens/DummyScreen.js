import React from "react";

import MenuIcon from "../components/atoms/MenuIcon";
const DummyScreen = (props) => {
  return null;
};

export const screenOptions = (navData) => {
  return {
    headerLeft: () => {
      return <MenuIcon navigation={navData.navigation} />;
    },
  };
};

export default DummyScreen;
