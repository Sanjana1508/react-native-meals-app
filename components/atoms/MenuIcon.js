import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";
import CustomHeaderButton from "./HeaderButton";

const MenuIcon = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default MenuIcon;
