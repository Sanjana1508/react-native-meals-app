import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import DefaultText from "../atoms/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetail = (props) => {
  return (
    <ScrollView>
      <Image source={{ uri: props.meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{props.meal.duration}m</DefaultText>
        <DefaultText>{props.meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{props.meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {props.meal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {props.meal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetail;
