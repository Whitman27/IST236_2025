import React = require('react');
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RadioGroup, RadioButtonProps } from 'react-native-radio-buttons-group';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
// Import Components
import NavButton from '../components/NavButton';
import Title from '../components/Title';
// Import Constants
import Colors from '../constants/Colors';

// Define the props interface for HomeScreen
interface HomeScreenProps {
  repairTimeRadioButtons: RadioButtonProps[];
  onSetRepairTimeId: (id: string) => void;
  repairTimeId: string;
  services: { id: string; name: string }[];
  onSetServices: (id: string) => void;
  onSetNewsletter: (value: boolean) => void;
  newsletter: boolean;
  onSetRentalMembership: (value: boolean) => void;
  rentalMembership: boolean;
  onNext: () => void;
}

function HomeScreen(props: HomeScreenProps) {
  // Get safe area insets
  const insets = useSafeAreaInsets();

  return (
    // Apply an image background to the entire screen
    <ImageBackground
      source={require('../assets/images/geometry_back.jpg')}
      resizeMode="stretch"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
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
        <View style={styles.titleContainer}>
          <Title>Bicycle Repair Shop</Title>
        </View>

        {/* Scrollable container for the content */}
        <ScrollView style={styles.scrollContainer}>
          {/* Selecting service times on radio buttons */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Times:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabel}
            />
          </View>

          {/* Selecting service options on checkboxes */}
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Options:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={() => props.onSetServices(item.id)}
                      textStyle={{
                        textDecorationLine: 'none',
                        color: Colors.accent500,
                        fontFamily: 'bicycleRegular',
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* For signing up for newsletters and rental membership switches */}
          <View style={styles.rowContainer}>
            <View style={styles.signUpContainer}>
              <View style={styles.signUpSubContainer}>
                <Text style={styles.signUpLabel}>Newsletter Sign Up</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary300,
                    true: Colors.primary800,
                  }}
                />
              </View>

              <View style={styles.signUpSubContainer}>
                <Text style={styles.signUpLabel}>Rental Membership</Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership
                      ? Colors.primary500
                      : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary300,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
          </View>

          {/* Nav Button to submit order */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

// Styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
    paddingVertical: 5,
    paddingBottom: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  radioHeader: {
    fontFamily: 'bicycleBold',
    color: Colors.primary500,
    fontSize: 25,
  },
  radioGroup: {
    paddingBottom: 30,
  },
  radioGroupLabel: {
    fontFamily: 'bicycleRegular',
    fontSize: 15,
    color: Colors.accent500,
    justifyContent: 'center',
    paddingTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 25,
    fontFamily: 'bicycleBold',
    color: Colors.primary500,
    paddingBottom: 20,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  signUpContainer: {
    justifyContent: 'space-between',
  },
  signUpSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signUpLabel: {
    fontFamily: 'bicycleRegular',
    fontSize: 15,
    color: Colors.accent500,
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
  },
  
});
