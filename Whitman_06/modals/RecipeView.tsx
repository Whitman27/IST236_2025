import { View, StyleSheet, Text, Modal, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import React from "react";

interface RecipeViewProps {
  visible: boolean;
  title: string;
  text: string;
  onClose: () => void;
}

export default function RecipeView(props: RecipeViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
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
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </ScrollView>
        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return To Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary800,
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: "paperNoteSketch",
    color: Colors.primary300,
    height: 35,
  },
  textContainer: {
    flex: 1,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "paperNote",
  },
  navButtonContainer: {
    marginTop: 10,
  },
});