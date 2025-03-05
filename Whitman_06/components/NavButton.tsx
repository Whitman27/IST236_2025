import { Pressable, View, StyleSheet, Text, } from "react-native";
import Colors from "../constants/Colors";
import React from "react";

interface NavButtonProps {
  onNext: () => void;
  children: string;
}

export default function NavButton(props: NavButtonProps) {
  return (
    <Pressable
      onPress={props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accent500,
    width: 150,
    height: 75,
    margin: 8,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 0,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "paperNoteBold",
    color: Colors.primary300,
  },
  textContainer: {
    flex: 1, 
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});