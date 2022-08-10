import { Text, View, StyleSheet } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      <Text>DECADENT BAKERY</Text>
      <Text>Decadent! Delicious! Delivered</Text>
      <TouchableOpacity onPress={() => clearCarousel()}>
        <Text>LOOK AT THESE ROLLS!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9F0933",
    textAlign: "center",
  },
});
