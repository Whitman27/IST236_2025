import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import React from "react";

interface TitleProps {
  children: string;
}

export default function Title(props: TitleProps) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: Colors.primary300,
    textShadowColor: Colors.accent500,
    textShadowRadius: 25,
    fontFamily: "noteFont",
    textAlign: "center",
  },
});