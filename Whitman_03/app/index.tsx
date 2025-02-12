import React from "react";
import { Text, View, TextInput } from "react-native";
import Button from '@/components/Button';
import { useState } from "react";
import { responses } from '@/components/Responses';

export default function Index() {
  const [enterText, setText] = useState('');
  const [randomResponse, setRandomResponse] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleButtonPress = () => {
    if (enterText.trim() === "") {
      alert("What would you like to ask?");
      return;
    }
    const response = getRandomResponse();
    setRandomResponse(response);
    setQuestion(enterText); 
    setText(''); 
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Always show the TextInput and Button */}
      <TextInput
        value={enterText}
        onChangeText={setText}
        placeholder="What would you like to ask?"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 }}
      />
      <Button label="Generate Response" onPress={handleButtonPress} />

      {/* Display the Wuestion and Response*/}
      {question !== "" && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Question: {question}</Text>
          <Text>Response: {randomResponse}</Text>
        </View>
      )}
    </View>
  );
}