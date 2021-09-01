import * as React from "react";
import { Appbar } from "react-native-paper";
import { Dimensions, StyleSheet } from "react-native";

const AppBar = () => {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    // <Appbar style={styles.bottom}>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    // </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    width: Dimensions.get("window").width,
    marginHorizontal: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 0,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
  },
});

export default AppBar;
