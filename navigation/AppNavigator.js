import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { MainNavigator } from "./MealsNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
