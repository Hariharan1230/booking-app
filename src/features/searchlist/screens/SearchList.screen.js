import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card"


export const SearchListScreen = () => {
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <ShopInfo />
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  statusbsear: {
    flex: 1,
  },
  search: {
    padding: 16
  },
  list: {

    padding: 16
  }

});