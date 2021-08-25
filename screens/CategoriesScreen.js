import React from "react";

import CategoryTemplate from "../components/templates/CategoriesTemplate";
import { CATEGORIES } from "../data/dummy-data";
import MenuIcon from "../components/atoms/MenuIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";

const CategoriesScreen = (props) => {
  return <CategoryTemplate data={CATEGORIES} navigation={props.navigation} />;
};

export const screenOptions = (navData) => {
  const parent = navData.navigation.getParent();
  // console.log(parent);
  const grandParent = navData.navigation.getParent();
  // console.log(pp);
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => {
      return <MenuIcon navigation={grandParent} />;
    },
  };
};

export default CategoriesScreen;
