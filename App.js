import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, LogBox } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { persistCache, AsyncStorageWrapper } from "apollo3-cache-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import QueueLink from "apollo-link-queue";
import { onError } from "@apollo/client/link/error";

import AppNavigator from "./navigation/AppNavigator";
import mealsReducer from "./store/reducers/meals";
import { getCategories } from "./screens/CategoriesScreen";
import Category from "./models/category";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

enableScreens();

const rootReducer = combineReducers({ meals: mealsReducer });

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const cache = new InMemoryCache();

const queueLink = new QueueLink();

// cache.writeQuery({
//   query: getCategories,
//   data: {
//     getCategories: [
//       new Category("c1", "Italian", "#f5428d"),
//       new Category("c2", "Quick & Easy", "#f54252"),
//       new Category("c3", "Hamburgers", "#f5a442"),
//       new Category("c4", "German", "#f5d142"),
//       new Category("c5", "Light & Lovely", "#368dff"),
//       new Category("c6", "Exotic", "#41d95d"),
//       new Category("c7", "Breakfast", "#9eecff"),
//       new Category("c8", "Asian", "#b9ffb0"),
//       new Category("c9", "French", "#ffc7ff"),
//       new Category("c10", "Summer", "#47fced"),
//     ],
//   },
// });
persistCache({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
  debounce: 2000,
  maxSize: false,
  trigger: (persist) => {
    const interval = setInterval(persist, 10000);

    return () => clearInterval(interval);
  },
});

const httpLink = createHttpLink({
  uri: "http://192.168.101.6:4000/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = ApolloLink.from([queueLink, errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [loadingCache, setLoadingCache] = useState(true);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        queueLink.open();
        setOnline(true);
      } else {
        queueLink.close();
      }
    });

    return () => unsubscribe();
  }, []);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});
