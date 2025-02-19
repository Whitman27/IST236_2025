import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// Import component MovieItem
import MovieItem from '@/components/movieItem.js';

export default function App() {
  // Manage the list of movies
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Shawshank Redemption",
      image: require("@/assets/images/The_Shawshank_Redemption.jpg"),
      rating: "9.5",
    },
    {
      name: "We Were Soldiers",
      image: require("@/assets/images/We_Were_Soldiers.jpg"),
      rating: "9",
    },
    {
      name: "Saving Private Ryan",
      image: require("@/assets/images/Saving_Private_Ryan.jpg"),
      rating: "8.5",
    },
    {
      name: "Unbroken",
      image: require("@/assets/images/Unbroken.jpg"),
      rating: "8.25",
    },
    {
      name: "Hacksaw Ridge",
      image: require("@/assets/images/Hacksaw_Ridge.jpg"),
      rating: "8",
    },
    {
      name: "The Outpost",
      image: require("@/assets/images/The_Outpost.jpg"),
      rating: "7.7",
    },
    {
      name: "Fury",
      image: require("@/assets/images/Fury.jpg"),
      rating: "7.5",
    },
    {
      name: "The Sandlot",
      image: require("@/assets/images/The_Sandlot.jpg"),
      rating: "7.25",
    },
    {
      name: "For Love of the Game",
      image: require("@/assets/images/For_Love_of_the_Game.jpg"),
      rating: "7",
    },
    {
      name: "Moneyball",
      image: require("@/assets/images/Moneyball.jpg"),
      rating: "6.5",
    },
  ]);
  return (
    <>
    {/* Add the status bar */}
    <StatusBar style='dark'/>
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 10 Movies</Text>
      </View>

      <View style={styles.listContainer}>
      {/* Enable scrolling for the movie list */}
        <ScrollView
        // Hide the vertical scroll indicator
        showsVerticalScrollIndicator={false}
        // Disable vertical bounce effect
        alwaysBounceVertical={false}
        >
          {/* Map through the movieItems array and render MovieItem components */}
            {movieItems.map((itemData) => (
              // MovieItem component with details passed as props
            <MovieItem 
            name={itemData.name} 
            image ={itemData.image} 
            rating={itemData.rating}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
}

// Styles for different components within the app
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer:{
    flex:1,
    justifyContent:"center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 10,
    borderRadius: 10,
  },
  title: {
    fontSize:55,
    fontWeight:"bold",
  },
  listContainer:{
    flex:8,
    width: "90%"
  },
});