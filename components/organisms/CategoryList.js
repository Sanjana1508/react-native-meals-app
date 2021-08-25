import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import Category from "../molecules/Category";

const CategoryList = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <Category
        goToMeals={() =>
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          })
        }
        color={itemData.item.color}
      >
        {itemData.item.title}
      </Category>
    );
  };
  return (
    <FlatList data={props.data} renderItem={renderGridItem} numColumns={2} />
  );
};

export default CategoryList;
