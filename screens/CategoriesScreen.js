import React, { useState, useEffect } from "react";

import CategoryTemplate from "../components/templates/CategoriesTemplate";
import { CATEGORIES } from "../data/dummy-data";
import MenuIcon from "../components/atoms/MenuIcon";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import NetInfo from "@react-native-community/netinfo";
import { View, Text } from "react-native";
import { queryAllCategories, insertNewCategory } from "../databases/allSchemas";
import realm from "../databases/allSchemas";

export const getCategories = gql`
  query GetCategories {
    getCategories {
      id
      title
      color
    }
  }
`;

const CategoriesScreen = (props) => {
  const [online, setOnline] = useState(false);
  const [cats, setCats] = useState([]);
  const {
    loading,
    data: currentData,
    error,
  } = useQuery(getCategories, {
    fetchPolicy: online ? "cache-and-network" : "cache-only",
  });
  console.log(error);
  console.log(currentData);

  reloadData = () => {
    queryAllCategories()
      .then((categories) => {
        setCats(categories);
      })
      .catch((error) => {
        setCats([]);
      });
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setOnline(true);
      } else {
        setOnline(false);
      }
    });
    console.log(online);
    return () => unsubscribe();
  }, []);
  return (
    <CategoryTemplate
      data={currentData.getCategories}
      navigation={props.navigation}
    />
  );
};

export const screenOptions = (navData) => {
  const parent = navData.navigation.getParent();
  // console.log(parent);
  const grandParent = navData.navigation.getParent();
  // console.log(pp);
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => {
      return <MenuIcon navigation={grandParent} />;
    },
  };
};

export default CategoriesScreen;
