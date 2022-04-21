import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const images = [
  "https://cdn.pixabay.com/photo/2022/03/29/21/04/eggs-7100211_960_720.jpg",
  "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
  "https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80",
  "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80",
  "https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80",
  "https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80",
  "https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80",
  "https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80",
  "https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80",
  "https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80",
  "https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80",
];

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export const Offers = () => {
  const [imgActive, setimgActive] = useState(0);
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.floor(
        (nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width) *
        1.2
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.wrap}>
      <ScrollView
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {images.map((e, index) => (
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#f2f2f2"
            key={e}
            onPress={({ data }) => trigger()}
          >
            <Image
              key={e}
              resizeMode="cover"
              style={{
                borderRadius: 25,
                width: 300,
                height: 218,
                marginRight: 20
              }}
              source={{ uri: e }}
            />
          </TouchableHighlight>
        ))}
      </ScrollView>

      <View style={styles.wrapDot}>
        {images.map((e, index) => (
          <Text
            key={e}
            style={imgActive === index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    width: WIDTH,
    height: HEIGHT * 0.26,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
