import { View, Platform, Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import React from "react";

interface CountryGridTitleProps {
  name: string;
  color: string;
  onPress: () => void;
}

function CountryGridTitle(props: CountryGridTitleProps) {
  return (
    <View style={styles.gridItem}>
      {/* Make each country a pressable button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={props.onPress}
      >
        {/* Add a linear gradient to the button */}
        <LinearGradient
          colors={[
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            Colors.accent300,
          ]}
          style={styles.innerContainer}
        >
          <Text style={styles.name}>{props.name}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default CountryGridTitle;

// StyleSheet for styling the components
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ojuMedium",
  },
});