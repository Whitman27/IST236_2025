import React from "react";
import { Text, View, Image, Linking } from "react-native";
import profilePic from '../assets/images/profile_pic.png';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <Image
       source={profilePic}
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20, }}
        resizeMode="center"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Collin Whitman</Text>
      <Text style={{ fontSize: 18, color: "gray", marginBottom: 10 }}>
        Software Developer
      </Text>
      <Text
        style={{ color: "blue", marginBottom: 5 }}
        onPress={() => Linking.openURL("mailto:Collin.whitman@gmail.com")}
      >
        Collin.whitman@gmail.com
      </Text>
      <Text
        style={{ color: "blue", marginBottom: 5 }}
        onPress={() => Linking.openURL("tel:+13304018224")}
      >
        (330) 401-8224
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://github.com/Whitman27/IST236_2025")}
      >
        GitHub Profile
      </Text>
    </View>
  );
}
