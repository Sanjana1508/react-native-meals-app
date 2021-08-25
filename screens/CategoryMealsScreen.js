import React from "react";
import { Text, Platform } from "react-native";
import { useSelector } from "react-redux";

import Category from "../components/molecules/Category";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealsTemplate from "../components/templates/MealsTemplate";

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <MealsTemplate
      meals={displayedMeals}
      navigation={props.navigation}
    ></MealsTemplate>
  );
};

export const screenOptions = (navigationData) => {
  const catId = navigationData.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
