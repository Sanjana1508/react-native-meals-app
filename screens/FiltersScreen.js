import React from "react";
import { Text } from "react-native";
import Category from "../components/molecules/Category";
import CustomHeaderButton from "../components/atoms/HeaderButton";
import MenuIcon from "../components/atoms/MenuIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import FiltersManager from "../components/organisms/FiltersManager";
import { DrawerActions } from "react-navigation-drawer";

const FiltersScreen = (props) => {
  return <FiltersManager navigation={props.navigation} />;
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return <MenuIcon navigation={navData.navigation} />;
    },
    headerRight: () => {
      console.log(navData.route);
      const filterdetails = navData.route.params
        ? navData.route.params.save
        : null;
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={filterdetails} />
        </HeaderButtons>
      );
    },
  };
};
export default FiltersScreen;
