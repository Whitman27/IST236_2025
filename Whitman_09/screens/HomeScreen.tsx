import { View, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTitle from "../components/CountyGridTitle";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation"; // Import your navigation types
import React from "react";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  function renderCountryItem(itemData: { item: { id: string; name: string; color: string } }) {
    function pressHandler() {
      navigation.navigate("DestinationsOverview", {  // Changed to match navigator
        countryId: itemData.item.id,
        countryName: itemData.item.name // Added for the header title
      });
    }
    
    return (
      <CountryGridTitle
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}

export default HomeScreen;