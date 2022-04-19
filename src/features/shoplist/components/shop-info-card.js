import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from 'react-native-paper';
import { Offers } from './Offers';
export const ShopInfo = ({ shops = {} }) => {
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
    <>

      <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
        <Text style={styles.title}>{name}</Text>
      </Card>
    </>
  )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white'
  },
  cover: {
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    padding: 16
  }
})