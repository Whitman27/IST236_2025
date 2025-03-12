import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Import Components
import NavButton from '../components/NavButton';
import Title from '../components/Title';
// Import Constants
import Colors from '../constants/Colors';
import React = require('react');

// Define the props interface for OrderReviewScreen
interface OrderReviewScreenProps {
  repair: string;
  services: { id: string; name: string; value: boolean }[];
  newsletter: boolean;
  rentalMembership: boolean;
  price: number;
  onNext: () => void;
}

function OrderReviewScreen(props: OrderReviewScreenProps) {
  // Get safe area insets
  const insets = useSafeAreaInsets();

  return (
    // Apply linear gradient to the background
    <LinearGradient
      colors={[Colors.accent500, Colors.accent500, Colors.accent500]}
      style={styles.rootContainer}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Scrollable container for the content */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Title>Order Summary</Title>
          </View>

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Your Order has been placed with your order details below
            </Text>
          </View>

          {/* Displaying selected services */}
          <View style={styles.servicesContainer}>
            <Text style={styles.service}>Service Times:</Text>
            <Text style={styles.subService}>{props.repair}</Text>
            <Text style={styles.service}>Service Options:</Text>
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.subService}>
                    {item.name}
                  </Text>
                );
              }
            })}

            {/* Section for displaying sign-up options */}
            <Text style={styles.service}>Sign Up:</Text>
            <Text style={styles.subService}>
              {props.newsletter ? 'Newsletter' : ''}
            </Text>
            <Text style={styles.subService}>
              {props.rentalMembership ? 'Rental Membership' : ''}
            </Text>
          </View>

          {/* Section for displaying pricing details */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Subtotal: ${props.price}</Text>
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>

          {/* Nav Button to return home */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

// Styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  subTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 10,
    padding: 5,
  },
  subTitle: {
    fontSize: 22,
    fontFamily: 'bicycleMedium',
    textAlign: 'center',
    color: Colors.primary500,
  },
  servicesContainer: {
    flex: 3,
    padding: 25,
  },
  subService: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'bicycleRegular',
    paddingTop: 25,
  },
  service: {
    fontSize: 20,
    fontFamily: 'bicycleBold',
    color: Colors.primary500,
    paddingTop: 15,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});