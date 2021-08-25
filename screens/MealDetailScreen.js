import React, { useEffect, useCallback } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import MealDetailTemplate from "../components/templates/MealDetailTemplate";
import CustomHeaderButton from "../components/atoms/HeaderButton";
import { toggleFavorite } from "../store/actions/mealActions";

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.route.params.mealId;
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <MealDetailTemplate
      meal={selectedMeal}
      navigation={props.navigation}
    ></MealDetailTemplate>
  );
};

export const screenOptions = (navigationData) => {
  // const mealId = navigationData.route.params.mealId;
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = navigationData.route.params.mealTitle;
  const toggleFavorite = navigationData.route.params.toggleFav;
  const isFav = navigationData.route.params.isFav;
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={isFav ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      );
    },
  };
};

export default MealDetailScreen;
