import React = require('react');
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

// Define the props interface for Title
interface TitleProps {
    children: React.ReactNode;
}

// Function for the title
function Title(props: TitleProps) {
    return <Text style={styles.title}>{props.children}</Text>;
}

// To be able to export
export default Title;

// Styles
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: Colors.primary500,
        textAlign: 'center',
        fontFamily: 'bicycleBold',
        paddingTop: 20,
    },
});