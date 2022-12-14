import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import Main from "./screens/MainComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";

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
    <NavigationContainer>
      {loading ? <Loading /> : <Main />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
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
registerRootComponent(App);
