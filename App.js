import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import CarouselComponent from "./screens/components/CarouselComponent";
import HomeScreen from "./screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const Loading = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="5637DD" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default App = () => {
  const [loading, setLoading] = useState(true);

  const [viewedCarousel, setViewedCarousel] = useState(false);

  const checkViewedCarousel = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedCarousel");

      if (value !== null) {
        setViewedCarousel(true);
      }
    } catch (err) {
      console.log("Error @checkViewedCarousel: ", err);
    } finally {
      setViewedCarousel(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkViewedCarousel();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : viewedCarousel ? (
        <HomeScreen />
      ) : (
        <CarouselComponent />
      )}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#5637DD",
    fontSize: 14,
    fontWeight: "bold",
  },
});
