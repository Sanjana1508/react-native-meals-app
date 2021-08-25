import React from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import Colors from "../../constants/Colors";
import FilterSwitch from "../atoms/FiltesSwitch";

const Filters = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        gluten={props.gluten}
        setGluten={props.setGluten}
      />
      <FilterSwitch
        label="Lactose-Free"
        gluten={props.lactose}
        setGluten={props.setLactose}
      />
      <FilterSwitch
        label="Vegan"
        gluten={props.vegan}
        setGluten={props.setVegan}
      />
      <FilterSwitch
        label="Vegetarian"
        gluten={props.vegetarian}
        setGluten={props.setVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default Filters;
