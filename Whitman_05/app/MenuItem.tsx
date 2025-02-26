import React = require("react");
import { View, Text, Image, StyleSheet } from "react-native";

interface MenuItemProps {
  name: string;
  price: number;
  image: any; 
}

// Pulls Menu items stored in MenuItem.tsx
const MenuItem: React.FC<MenuItemProps> = ({ name, price, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#444",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "#FFD700",
    fontSize: 16,
    marginTop: 5,
  },
});

export default MenuItem;