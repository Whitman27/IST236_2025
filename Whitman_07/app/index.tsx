import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Import Constants
import Colors from '../constants/Colors';
// Import screens
import HomeScreen from '../screens/HomeScreen';
import OrderReviewScreen from '../screens/OrderReviewScreen';
import { useFonts } from 'expo-font';
import { useMemo, useState } from 'react';
import React = require('react');

// Define types for the repair time radio buttons
interface RepairTimeRadioButton {
  id: string;
  label: string;
  value: string;
  price: number;
  borderColor: string;
  color: string;
}

// Define types for the services
interface Service {
  id: number;
  name: string;
  value: boolean;
  price: number;
}

export default function App() {
  // Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    bicycleRegular: require('../assets/fonts/KodeMono-Regular.ttf'),
    bicycleMedium: require('../assets/fonts/KodeMono-Medium.ttf'),
    bicycleBold: require('../assets/fonts/KodeMono-Bold.ttf'),
  });

  // State variables
  const [currentScreen, setCurrentScreen] = useState<string>('');
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  // Radio button options for repair time
  const repairTimeRadioButtons: RepairTimeRadioButton[] = useMemo(
    () => [
      {
        id: '0',
        label: 'Standard',
        value: 'Standard',
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: '1',
        label: 'Expedited',
        value: 'Expedited',
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: '2',
        label: 'Next Day',
        value: 'Next Day',
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  // State variables for repair time and services
  const [repairTimeId, setRepairTimeId] = useState<number>(0);
  const [services, setServices] = useState<Service[]>([
    { id: 0, name: 'Basic Tune-Up', value: false, price: 50 },
    { id: 1, name: 'Comprehensive Tune-Up', value: false, price: 75 },
    { id: 2, name: 'Flat Tire Repair', value: false, price: 20 },
    { id: 3, name: 'Brake Servicing', value: false, price: 50 },
    { id: 4, name: 'Gear Servicing', value: false, price: 40 },
    { id: 5, name: 'Chain Servicing', value: false, price: 15 },
    { id: 6, name: 'Frame Repair', value: false, price: 35 },
    { id: 7, name: 'Safety Check', value: false, price: 25 },
    { id: 8, name: 'Accessory Install', value: false, price: 10 },
  ]);

  // State variables for newsletter and rental membership
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [rentalMembership, setRentalMembership] = useState<boolean>(false);

  // Set the checkbox handler for services
  function setServicesHandler(id: number) {
    setServices((prevServices: Service[]) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Set the switch handler for newsletter
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  // Switch handler for rental membership
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Handler to reset state and go to the home screen
  function HomeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen('home');
  }

  // Handler to calculate the order review price
  function orderReviewHandler() {
    let price = services.reduce((total, service) => total + (service.value ? service.price : 0), 0);
    
    // Add additional charges based on newsletter and rental membership
    if (rentalMembership) {
      price += 100;
    }

    // Add repair time cost
    price += repairTimeRadioButtons[repairTimeId].price;

    // Update state
    setCurrentPrice(price);
    setCurrentScreen('review');
  }

  // Set screens to render
  let screen = (
    <HomeScreen
    repairTimeId={repairTimeId.toString()}
    services={services.map(({ id, name }) => ({
      id: id.toString(),
      name,
    }))}
    newsletter={newsletter}
    rentalMembership={rentalMembership}
    repairTimeRadioButtons={repairTimeRadioButtons}
    onSetRepairTimeId={(id: string) => setRepairTimeId(parseInt(id))}
    onSetServices={setServicesHandler}
    onSetNewsletter={setNewsletterHandler}
    onSetRentalMembership={setRentalMembershipHandler}
    onNext={orderReviewHandler}
  />
  );

  if (currentScreen === 'review') {
    screen = (
      <OrderReviewScreen
        repair={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={HomeScreenHandler}
      />
    );
  }

  // Ensure that the whole app is loaded before showing the first screen
  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
