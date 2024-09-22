import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

const LoginScreen6 = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View style={{ flex: 1, backgroundColor: "#31AA5230" }}>
      <View style={styles.container_header}>
        <Text style={styles.cus_textHeader}>REGISTER</Text>
      </View>

      <View style={styles.container_email}>
        <TextInput placeholder="Name" style={styles.style_txtInput}></TextInput>
        <TextInput
          placeholder="Phone"
          style={styles.style_txtInput}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.style_txtInput}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.style_txtInput}
        ></TextInput>

        <TextInput
          placeholder="Birthday"
          style={styles.style_txtInput}
        ></TextInput>
      </View>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton
            value="option1"
            status={selectedValue === "option1" ? "checked" : "unchecked"}
            onPress={() => setSelectedValue("option1")}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Male</Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton
            value="option2"
            status={selectedValue === "option2" ? "checked" : "unchecked"}
            onPress={() => setSelectedValue("option2")}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>Female</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E53935" }]}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          fontSize: 14,
          fontWeight: 400,
          fontFamily: "Roboto",
        }}
      >
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_email: {
    alignItems: "center",
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  container_header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    top: 40,
  },
  cus_textHeader: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "700",
  },
  button: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    width: 305,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  style_txtInput: {
    padding: 10,
    backgroundColor: "#C4C4C4",
    width: 305,
    height: 54,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
    borderRadius: 8,
    width: 305,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});

export default LoginScreen6;
