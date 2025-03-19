import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import React from 'react';


// Define the props interface for Title
interface TitleProps {
  children: React.ReactNode;
}

// Function for the title
function Title(props: TitleProps) {
  const { width } = useWindowDimensions();
  return (
    <Text style={[styles.title, { fontSize: width * 0.1 }]}>
      {props.children}
    </Text>
  );
}

// To be able to export
export default Title;

// Define styles
const styles = StyleSheet.create({
  title: {
    fontFamily: 'campground',
    color: Colors.primary500,
    textAlign: 'center',
  },
});