import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import RecipesItem from "../components/RecipesItem";
import RecipeView from "../modals/RecipeView";
import { useState } from "react";
import React from "react";
import { Recipe } from "@/app";

interface RecipesScreenProps {
  onHome: () => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
  currentRecipes: Recipe[];
}

export default function RecipesScreen(props: RecipesScreenProps) {
  const insets = useSafeAreaInsets();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  const recipeViewHandler = (title: string, text: string) => {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  };

  const closeRecipeViewHandler = () => {
    setModalIsVisible(false);
  };

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
        <Title>Current Recipes</Title>
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item) => item.id.toString()}
          alwaysBounceVertical={false}
          renderItem={({ item }) => (
            <RecipesItem
              title={item.title}
              onView={() => recipeViewHandler(item.title, item.text)}
              onDelete={() => props.onDelete(item.id)}
            />
          )}
        />
      </View>
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "95%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
