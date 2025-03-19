import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

// Import Screen
import HomeScreen from '../screens/HomeScreen';

// Import constants
import Colors from '../constants/Colors';
import React = require('react');

export default function App() {
  // Load the custom font
  const [fontsLoaded, fontError] = useFonts({
    campground: require('../assets/fonts/Marhey-Font.ttf'),
  });

  // Callback function to be executed when the root view layout changes
  const onLayoutRootView = React.useCallback(async () => {
    // Hide the splash screen once the fonts are loaded or an error occurs
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Set the initial screen
  let screen = <HomeScreen />;

  // If fonts are not loaded and there is no font error, return null
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Otherwise, return the main application structure
  return (
    <>
      {/* Set the status bar style to light */}
      <StatusBar style="light" />
      {/* Use SafeAreaProvider to handle safe area insets and apply styles */}
      <SafeAreaProvider style={styles.container}>
        <View onLayout={onLayoutRootView} style={styles.container}>
          {screen}
        </View>
      </SafeAreaProvider>
    </>
  );
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
