import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen, {
  screenOptions as CategoriesScreenOptions,
} from "../screens/CategoriesScreen";
import CategoryMealsScreen, {
  screenOptions as CategoryMealsScreenOptions,
} from "../screens/CategoryMealsScreen";
import MealDetailScreen, {
  screenOptions as MealDetailScreenOptions,
} from "../screens/MealDetailScreen";
import FavoritesScreen, {
  screenOptions as FavoritesScreenOptions,
} from "../screens/FavoritesScreen";
import FiltersScreen, {
  screenOptions as FiltersScreenOptions,
} from "../screens/FiltersScreen";

import DummyScreen, {
  screenOptions as DummyScreenOptions,
} from "../screens/DummyScreen";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/atoms/HeaderButton";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const MealsStackNavigator = createStackNavigator();

const MealsNavigator = (navigation) => {
  return (
    <MealsStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStackNavigator.Screen
        name="Meals Categories"
        component={CategoriesScreen}
        screenProps={{ rootNavigation: navigation }}
        options={CategoriesScreenOptions}
      />
      <MealsStackNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={CategoryMealsScreenOptions}
      />
      <MealsStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </MealsStackNavigator.Navigator>
  );
};

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: CategoriesScreen,
//     CategoryMeals: {
//       screen: CategoryMealsScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },
//   {
//     // initialRouteName: "Categories",
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );
const FavStackNavigator = createStackNavigator();

export const FavNavigator = () => {
  return (
    <FavStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <FavStackNavigator.Screen
        name=" Your Favorites"
        component={FavoritesScreen}
        options={FavoritesScreenOptions}
      />
      <FavStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </FavStackNavigator.Navigator>
  );
};

// const FavNavigator = createStackNavigator(
//   {
//     Favorites: FavoritesScreen,
//     MealDetail: MealDetailScreen,
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );

// const tabScreenConfig = {
//   Meals: {
//     screen: MealsNavigator,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return (
//           <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
//         );
//       },
//       tabBarColor: Colors.primary,
//       tabBarLabel:
//         Platform.OS === "android" ? (
//           <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
//         ) : (
//           "Meals"
//         ),
//     },
//   },
//   Favorites: {
//     screen: FavNavigator,
//     navigationOptions: {
//       //tabBarLabel: "Favorites!",
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
//       },
//       tabBarColor: Colors.accentColor,
//       tabBarLabel:
//         Platform.OS === "android" ? (
//           <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
//         ) : (
//           "Favorites"
//         ),
//     },
//   },
// };

const MealsFavBottomTabNavigator = createBottomTabNavigator();

const MealsFavTabNavigator = (navigation) => {
  return (
    <MealsFavBottomTabNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: Colors.primary,
          },
          null,
        ],
        headerShown: false,
      }}
    >
      <MealsFavBottomTabNavigator.Screen
        name="Meals"
        component={MealsNavigator}
        screenProps={{ rootNavigation: navigation }}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={25}
                color={tabInfo.tintColor}
              />
            );
          },
          tabBarColor: Colors.primary,
        }}
        // options={{
        //   tabBarIcon: (tabInfo) => {
        //     return (
        //       <Ionicons
        //         name="ios-restaurant"
        //         size={25}
        //         color={tabInfo.tintColor}
        //       />
        //     );
        //   },
        //   tabBarColor: Colors.primary,
        //   tabBarLabel:
        //     Platform.OS === "android" ? (
        //       <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        //     ) : (
        //       "Meals"
        //     ),
        // }}
      />
      <MealsFavBottomTabNavigator.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            );
          },
          tabBarColor: Colors.accentColor,
          // tabBarLabel:
          //   Platform.OS === "android" ? (
          //     <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
          //   ) : (
          //     "Favorites"
          //   ),
        }}
      />
    </MealsFavBottomTabNavigator.Navigator>
  );
};

// const MealsFavTabNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeColor: "white",
//         shifting: true,
//         barStyle: {
//           backgroundColor: Colors.primary,
//         },
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           activeTintColor: Colors.accentColor,
//           labelStyle: {
//             fontFamily: "open-sans",
//           },
//         },
//       });

const FiltersStackNavigator = createStackNavigator();

export const FiltersNavigator = () => {
  return (
    <FiltersStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <FiltersStackNavigator.Screen
        name="Filters"
        component={FiltersScreen}
        options={FiltersScreenOptions}
      />
    </FiltersStackNavigator.Navigator>
  );
};

// const FiltersNavigator = createStackNavigator(
//   {
//     Filters: FiltersScreen,
//   },
//   {
//     // navigationOptions:{
//     //   drawerLabel:'Filters'
//     // },
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );
const MainDrawerNavigator = createDrawerNavigator();
export const MainNavigator = (navigation) => {
  return (
    <MainDrawerNavigator.Navigator
      screenOptions={{
        contentOptions: {
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        },
      }}
    >
      <MainDrawerNavigator.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        screenProps={{ rootNavigation: navigation }}
        options={({ drawerLabel: "Meals" }, { headerShown: false })}
      />
      <MainDrawerNavigator.Screen
        name=" Your Filters"
        component={FiltersNavigator}
        options={{ headerShown: false }}
      />
    </MainDrawerNavigator.Navigator>
  );
};

// const mainNavigator = createDrawerNavigator(
//   {
//     MealsFavs: {
//       screen: MealsFavTabNavigator,
//       navigationOptions: {
//         drawerLabel: "Meals",
//       },
//     },
//     Filters: FiltersNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.accentColor,
//       labelStyle: {
//         fontFamily: "open-sans-bold",
//       },
//     },
//   }
// );

//export default createAppContainer(mainNavigator);
