import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
  Text,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
} from 'react-native';
import WheelPicker from 'react-native-wheely';

// Import components
import Title from '../components/Title';
import NavButton from '../components/NavButton';
// Import constants
import Colors from '../constants/Colors';
import { useState } from 'react';
import React from 'react';




function HomeScreen() {
  // Get safe area insets
  const insets = useSafeAreaInsets();

  // State and functions for Check In date
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [showCheckIn, setShowCheckIn] = useState<boolean>(false);

  // Function to show Check In date picker
  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  // Function to hide Check In date picker
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  // Function to handle Check In date change
  function onChangeCheckIn(event: any, selectedDate?: Date) {
    const currentDate = selectedDate || checkIn;
    if (Platform.OS === 'android') {
      hideCheckInPicker();
    }
    setCheckIn(currentDate);
  }

  // State and functions for Check Out date
  const [checkOut, setCheckOut] = useState<Date>(new Date());
  const [showCheckOut, setShowCheckOut] = useState<boolean>(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event: any, selectedDate?: Date) {
    const currentDate = selectedDate || checkOut;
    if (Platform.OS === 'android') {
      hideCheckOutPicker();
    }
    setCheckOut(currentDate);
  }

  // States and functions for number of guests
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState<number>(0);
  const [showNumGuests, setShowNumGuests] = useState<boolean>(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index: number) {
    setNumGuests(index);
  }

  // States and functions for number of campsites
  const campsitesCounts = [1, 2, 3, 4, 5];
  const [numCampsites, setNumCampsites] = useState<number>(0);
  const [showNumCampsites, setShowNumCampsites] = useState<boolean>(false);

  function showNumCampsitesPicker() {
    setShowNumCampsites(true);
  }

  function hideNumCampsitesPicker() {
    setShowNumCampsites(false);
  }

  function onChangeNumCampsites(index: number) {
    setNumCampsites(index);
  }

  // Set the results to show on the screen after the user clicks the Reserve Now button
  const [results, setResults] = useState<string>('');

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Campsites:\t\t${campsitesCounts[numCampsites]}\n`;
    setResults(res);
  }

  // Dynamically change the text for the date and the label
  const { width } = useWindowDimensions();

  // Define styles for date label and text
  const dateLabelFlex = {
    fontSize: width * 0.07,
  };
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    <ImageBackground
      source={require('../assets/images/campground1.jpg')}
      resizeMode="cover"
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
        <ScrollView style={styles.scrollContainer}>
          {/* Title of campground */}
          <View style={styles.titleContainer}>
            <Title>Collin's Campground!</Title>
          </View>

          <View style={styles.rowContainer}>
            {/* Check In date */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            {/* Check Out date */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Check In date picker, switch screens on android and iOS */}
          <View>
            {showCheckIn && Platform.OS === 'android' && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={'date'}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === 'ios' && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={['portrait', 'landscape']}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={'date'}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}

            {/* Check Out date picker switch screens on android and iOS */}
            {showCheckOut && Platform.OS === 'android' && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={'date'}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === 'ios' && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={['portrait', 'landscape']}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={'date'}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          {/* Number of Guests */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Guests:
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {guestCounts[numGuests]}
                </Text>
              </View>
            </Pressable>

            {/* Number of Guests picker modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumGuests}
              supportedOrientations={['portrait', 'landscape']}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Guests:
                  </Text>
                  <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts.map(String)}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumGuestsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Number of Campsites */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Campsites:
            </Text>
            <Pressable onPress={showNumCampsitesPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {campsitesCounts[numCampsites]}
                </Text>
              </View>
            </Pressable>

            {/* Number of Campsites picker modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCampsites}
              supportedOrientations={['portrait', 'landscape']}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Campsites:
                  </Text>
                  <WheelPicker
                    selectedIndex={numCampsites}
                    options={campsitesCounts.map(String)}
                    onChange={onChangeNumCampsites}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Reserve Now button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Results */}
          <View style={styles.resultsContainer}>
            <Text style={styles.results}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

// Define styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.4,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: '95%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: 'campground',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  resultsContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  results: {
    textAlign: 'center',
    color: Colors.primary500,
    fontFamily: 'campground',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 25,
  },
});