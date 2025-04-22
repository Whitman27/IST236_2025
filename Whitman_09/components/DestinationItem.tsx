import { useState } from "react";
import { Pressable, View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import Colors from "../constants/Colors";
import ImageViewModal from "../modals/ImageViewModal";
import React from "react";

interface DestinationItemProps {
  listIndex: number;
  imageUrl: string;
  name: string;
  costVisit: number | string;
  foundedYear: number | string;
  rating: number | string;
  description?: string;
}

function DestinationItem(props: DestinationItemProps) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }

  function closeImageHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 === 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.cost}>Cost per night: $ {props.costVisit}</Text>
            </View>
            <Text style={styles.year}>Year Founded: {props.foundedYear}</Text>
            <Text style={styles.rating}>Rating: {props.rating} /5</Text>
          </View>
        </View>
      </Pressable>

      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        description={props.description || ''}
        onClose={closeImageHandler}
      />
    </View>
  );
}

export default DestinationItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#CCC",
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "28%",
    height: "120%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "75%",
    paddingLeft: 20,
  },
  name: {
    textAlign: "left",
    fontSize: 25,
    fontFamily: "ojuBold",
  },
  cost: {
    width: "85%",
    fontSize: 15,
    fontFamily: "ojuMedium",
  },
  year: {
    fontSize: 15,
    fontFamily: "ojuRegular",
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 14,
    fontFamily: "ojuLight",
  },
});