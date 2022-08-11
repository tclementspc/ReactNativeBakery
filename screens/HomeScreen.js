import { View, StyleSheet } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CarouselComponent from "./components/CarouselComponent";

export default HomeScreen = () => {
  const clearCarousel = async () => {
    try {
      await AsyncStorage.removeItem("@viewedCarousel");
    } catch (err) {
      console.log("Error @clearCarousel: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <CarouselComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
