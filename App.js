import { React } from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(34);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder='Age'
        keyboardType='numeric'
        style={styles.input}
        value={age.toString()}
        onChangeText={(text) => setAge(Number.parseInt(text))}
      />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    fontSize: 16,
    borderColor: "#353740",
    borderWidth: 1,

    padding: 16,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 4
  },

  label: {
    fontSize: 16,
    colour: "gray"
  }
});
