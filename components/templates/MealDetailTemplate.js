import React from "react";

import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealDetail from "../molecules/MealDetail";

const MealDetailTemplate = (props) => {
  return <MealDetail meal={props.meal}></MealDetail>;
};

export default MealDetailTemplate;
