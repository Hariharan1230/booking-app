import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../components/SearchBar";
import { SearchInfo } from "../components/Search-info.component"


export const SearchListScreen = () => {
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.container}>
        <SearchBar />
      </View>
      <View style={styles.innerContainer}>
        <SearchInfo />
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  statusbar: {
    flex: 1,
  },
  container: {
    padding: 20
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});