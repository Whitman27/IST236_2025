import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import React = require("react");


const HalfScreenLayout = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* ✅ Top Half - Text Content */}
      <View style={styles.topHalf}>
        <Text style={styles.text}>The Notorious P.I.G. BBQ</Text>
        <Text style={styles.text}>123 Main Street</Text>
        <Text style={styles.text}>Calabash, NC 28467</Text>
        <Text style={styles.text}>10 AM - 10 PM | Weekends 10 AM - 11 PM</Text>

        {/* ✅ Added Menu & Home Links */}
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => router.push("/MenuPage")}>
            <Text style={styles.link}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ✅ Bottom Half - Single Image */}
      <View style={styles.bottomHalf}>
        <Image source={require("@/assets/images/image1.jpg")} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 20,
  },
  bottomHalf: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: width,
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  linkContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  link: {
    color: "#FFD700", // Gold color for contrast
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    textDecorationLine: "underline",
  },
});

export default HalfScreenLayout;