import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import "../assets/images/enjoyingroll.jpg";

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
      <Text
        style={{
          color: "#9F0933",
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          paddingBottom: 40,
        }}
      >
        DECADENT ROLLS
      </Text>
      <Image source={require("../assets/images/enjoyingroll.jpg")} />
      <Text
        style={{
          color: "#9F0933",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          paddingBottom: 60,
          paddingTop: 20,
        }}
      >
        Decadent! Delicious! Delivered!
      </Text>
      <TouchableOpacity onPress={() => clearCarousel}>
        <Text
          style={{
            color: "#3388FF",
            textAlign: "center",
            fontSize: 16,
            paddingBottom: 10,
          }}
        >
          To shop, click here, then swipe screen left to right
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 85,
    justifyContent: "center",
    alignItems: "center",
  },
});
