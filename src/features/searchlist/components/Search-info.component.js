import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from 'react-native-paper';

export const SearchInfo = ({ shops = {} }) => {
  const {
    name = "Naturals",
    icon,
    photos = ['https://image3.mouthshut.com/images/imagesp/925106109s.jpeg'],
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = shops
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text>{name}</Text>
    </Card>
  )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white'
  },
  cover: {
    padding: 20,
    backgroundColor: 'white'
  }
})