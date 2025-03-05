import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import React from "react";

interface HomeScreenProps {
  onNext: () => void;
}

export default function HomeScreen(props: HomeScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootcontainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Collin's Recipes</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/note-recipe.jpg")}
        />
      </View>
      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onNext}>Go to Recipes</NavButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
