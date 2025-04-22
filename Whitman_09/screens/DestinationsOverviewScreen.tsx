import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { DESTINATIONS } from '../data/dummy-data';
import React from 'react';

function DestinationsOverviewScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { countryId, countryName } = route.params as { 
    countryId: string; 
    countryName: string 
  };

  // Filter destinations for this country
  const countryDestinations = DESTINATIONS.filter(
    (destination) => destination.countryId === countryId
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destinations in {countryName}</Text>
      
      <FlatList
        data={countryDestinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.destinationItem}>
            <Image 
              source={{ uri: item.imageUrl }} 
              style={styles.image}
            />
            <View style={styles.destinationInfo}>
              <Text style={styles.destinationName}>{item.name}</Text>
              <Text style={styles.destinationDetail}>Founded: {item.foundedYear}</Text>
              <Text style={styles.destinationDetail}>Rating: {item.rating}/5</Text>
              <Text style={styles.destinationDetail}>Cost: ${item.costVisit}/night</Text>
            </View>
          </View>
        )}
      />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color={Colors.primary500}
      />
    </View>
  );
}

export default DestinationsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.accent300,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: Colors.primary500,
    textAlign: 'center',
    fontFamily: 'ojuBold',
  },
  destinationItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  destinationInfo: {
    flex: 1,
    padding: 10,
  },
  destinationName: {
    fontSize: 18,
    fontFamily: 'ojuMedium',
    marginBottom: 5,
    color: Colors.primary500,
  },
  destinationDetail: {
    fontSize: 14,
    fontFamily: 'ojuRegular',
    color: '#555',
  },
});