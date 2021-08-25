import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";

import Meal from "../molecules/Meal";
import DefaultText from "../atoms/DefaultText";

const MealsList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <Meal
        onSelectMeal={() =>
          props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite,
          })
        }
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      >
        {itemData.item.title}
      </Meal>
    );
  };

  if (props.meals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, may be check your filters.</DefaultText>
      </View>
    );
  }
  return (
    <FlatList
      data={props.meals}
      renderItem={renderMealItem}
      style={{ width: "100%" }}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealsList;
