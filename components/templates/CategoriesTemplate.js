import React from "react";

import { CATEGORIES } from "../../data/dummy-data";
import CategoryList from "../organisms/CategoryList";

const CategoriesTemplate = (props) => {
  return <CategoryList data={props.data} navigation={props.navigation} />;
};
export default CategoriesTemplate;
