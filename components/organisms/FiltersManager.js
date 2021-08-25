import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import Filters from "../molecules/Filters";
import { setFilters } from "../../store/actions/mealActions";

const FiltersManager = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const setGlutenValue = (newValue) => {
    setIsGlutenFree(newValue);
  };

  const setLactoseValue = (newValue) => {
    setIsLactoseFree(newValue);
  };
  const setVeganValue = (newValue) => {
    setIsVegan(newValue);
  };
  const setVegetarianValue = (newValue) => {
    setIsVegetarian(newValue);
  };

  return (
    <Filters
      gluten={isGlutenFree}
      setGluten={setGlutenValue}
      lactose={isLactoseFree}
      setLactose={setLactoseValue}
      vegan={isVegan}
      setVegan={setVeganValue}
      vegetarian={isVegetarian}
      setVegetarian={setVegetarianValue}
    />
  );
};
export default FiltersManager;
