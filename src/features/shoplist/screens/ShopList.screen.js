import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card";
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import { Offers } from "../components/Offers";

export const ShopListScreen = () => {
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.search}>
        <SearchBar />
      </View>

      <Offers />


      <View style={styles.list}>

        <ShopInfo />
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  statusbar: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  search: {
    padding: 16,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    padding: 16
  }

});