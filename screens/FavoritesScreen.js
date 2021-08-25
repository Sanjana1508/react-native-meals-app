import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import Category from "../components/molecules/Category";
import MealsTemplate from "../components/templates/MealsTemplate";
import MenuIcon from "../components/atoms/MenuIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";
import DefaultText from "../components/atoms/DefaultText";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some.</DefaultText>
      </View>
    );
  }
  return (
    <MealsTemplate
      meals={favMeals}
      navigation={props.navigation}
    ></MealsTemplate>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => {
      return <MenuIcon navigation={navData.navigation} />;
    },
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
