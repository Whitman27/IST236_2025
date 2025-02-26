import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MenuItem from "./MenuItem";
import React = require("react");

const MenuPage = () => {
  const router = useRouter();

  // Menu Items with Pictures
  const menuItems = [
    {
      name: "Loaded Nachos",
      price: 8.99,
      image: require("@/assets/images/nachos.jpg"), 
    },
    {
      name: "Buffalo Wings",
      price: 10.99,
      image: require("@/assets/images/wings.jpg"), 
    },
    {
      name: "BBQ Ribs",
      price: 18.99,
      image: require("@/assets/images/ribs.jpg"), 
    },
    {
      name: "Pulled Pork Sandwich",
      price: 12.99,
      image: require("@/assets/images/sandwich.jpg"), 
    },
    {
      name: "Cheesecake",
      price: 6.99,
      image: require("@/assets/images/cheesecake.jpg"), 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Scrollable Menu Items */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} image={item.image} />
        ))}
      </ScrollView>

      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 20,
  },
  title: {
    color: "#FFD700",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 80, 
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MenuPage;