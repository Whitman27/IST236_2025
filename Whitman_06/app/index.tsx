import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import RecipesScreen from "../screens/RecipeScreen";
import React from "react";

// Define the Recipe type
export interface Recipe {
  id: number;
  title: string;
  text: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "recipes" | "add">("home");
  const [currentID, setCurrentID] = useState<number>(3);
  const [currentRecipes, setCurrentRecipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Classic Pancakes",
      text:
        "Ingredients:\n1 ½ cups all-purpose flour\n3 ½ teaspoons baking powder\n1 teaspoon salt\n1 tablespoon white sugar\n1 ¼ cups milk\n" +
        "1 egg\n3 tablespoons melted butter\n\nDirections:\n1.) In a large bowl, sift together the flour, baking powder, salt, and sugar.\n\n" +
        "2.) Make a well in the center and pour in the milk, egg, and melted butter. Mix until smooth.\n\n3.) Heat a lightly oiled griddle or frying pan over medium-high heat.\n\n" +
        "4.) Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.\n\n5.) Brown on both sides and serve hot with your favorite toppings.",
    },
    {
      id: 2,
      title: "Quick Fried Rice",
      text:
        "Ingredients:\n2 tsp oil\n1 egg, beaten\n2 rashers bacon, chopped\n175g mushrooms, sliced\n200g frozen peas\n" +
        "1 garlic clove, crushed\nsmall knob of ginger, grated\n2 tsp dark soy sauce, plus extra to serve\n1 tsp sugar\n" +
        "250g cooked basmati rice\n\nDirections:\n" +
        "1.-Heat the oil in a frying pan, then tip in the egg. Leave to set for 30 secs-1 min, swirling" +
        "every now and again, then tip it out and finely slice. Add the bacon and mushrooms to pan, then fry until golden, about 3 mins." +
        "Add the peas, garlic and ginger, then cook for 1 min\n\n" +
        "2.-Mix the soy sauce and sugar together. Turn up the heat, add the cooked" +
        "rice to the pan, heat through, then splash in the sweet soy sauce. Stir through the egg and serve straight away, with more soy sauce if you like.",
    },
  ]);

  const homeScreenHandler = () => setCurrentScreen("home");
  const recipesScreenHandler = () => setCurrentScreen("recipes");
  const addRecipeScreenHandler = () => setCurrentScreen("add");

  const addRecipeHandler = (enteredRecipeTitle: string, enteredRecipeText: string) => {
    setCurrentRecipes((currentRecipes) => [
      ...currentRecipes,
      { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
    ]);
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  };

  const deleteRecipeHandler = (id: number) => {
    setCurrentRecipes((currentRecipes) => currentRecipes.filter((item) => item.id !== id));
  };

  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipesScreenHandler} />
    );
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});