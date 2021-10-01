import React from "react";
import { gql, useQuery } from "@apollo/client";
import AppLoading from "expo-app-loading";
import { Text, FlatList, View, StyleSheet } from "react-native";

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;
const ChapterItem = ({ chapter }) => {
  const { number, title } = chapter;
  let header, subheader;

  if (number) {
    header = `Chapter ${number}`;
    subheader = title;
  } else {
    header = title;
  }

  return (
    <View style={styles.chapter}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </View>
  );
};

export default () => {
  const { data, loading } = useQuery(CHAPTERS_QUERY);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <FlatList
      data={data.chapters}
      renderItem={({ item }) => <ChapterItem chapter={item} />}
      keyExtractor={(chapter) => chapter.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  chapter: {
    padding: 10,
  },
  header: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  subheader: {
    fontSize: 14,
    fontFamily: "open-sans",
  },
});
