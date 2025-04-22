import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation'; 

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import DestinationsOverviewScreen from '../screens/DestinationsOverviewScreen';

// Import constants
import Colors from '../constants/Colors';
import React from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    campground: require('../assets/fonts/Marhey-Font.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: Colors.accent300,
              },
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Countries' }}
            />
            <Stack.Screen 
              name="DestinationsOverview" 
              component={DestinationsOverviewScreen}
              options={({ route }) => ({
                title: route.params.countryName || 'Destinations',
              })}
            />
          </Stack.Navigator>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});