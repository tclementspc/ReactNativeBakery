import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export default CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.cost}>{item.cost}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  name: {
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 10,
    color: "#9F0933",
    textAlign: "center",
  },
  cost: {
    fontWeight: "800",
    fontSize: 18,
    color: "#9F0933",
    textAlign: "center",
  },
  description: {
    color: "#9F0933",
    fontWeight: "300",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 16,
  },
});
