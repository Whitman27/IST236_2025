import {
  Pressable,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import React from 'react';


// Define the props interface for NavButton
interface NavButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

// Button function
function NavButton(props: NavButtonProps) {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      // Using the bind keyword we can preconfigure a function with a set input value
      // Instead of having to create another local function to call the provided function
      onPress={props.onPress}
      // By providing style and checking for pressed you can set a temporary styles
      // that will only be active while pressed. This will take effect on iOS and Android
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: width * 0.06 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

// Export to be able to import NavButton in other parts of the code
export default NavButton;

// Define styles
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 1000,
    maxWidth: '70%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    fontFamily: 'campground',
    textAlign: 'center',
    color: Colors.primary300,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15, // Increase padding
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional: Add a background color
  },
});