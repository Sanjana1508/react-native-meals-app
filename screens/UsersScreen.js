import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import AppLoading from "expo-app-loading";

const USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      mail
    }
  }
`;

const User = ({ userData }) => {
  const { name, mail } = userData;
};

const UserScreen = () => {
  const { data, loading } = useQuery(USERS_QUERY);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <FlatList
      data={data.users}
      keyExtractor={(user) => user.id.toString()}
      renderItem={({ user }) => <User userData={user} />}
    />
  );
};

const styles = StyleSheet.create({});

export default UserScreen;
