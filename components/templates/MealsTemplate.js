import React from "react";

import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealsList from "../organisms/MealsList";

const MealsTemplate = (props) => {
  return (
    <MealsList meals={props.meals} navigation={props.navigation}></MealsList>
  );
};
export default MealsTemplate;
