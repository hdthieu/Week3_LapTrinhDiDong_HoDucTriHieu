import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen2 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#31AA5230' }}>
      <View style={styles.container_header}>
        <Text style={styles.cus_textHeader}>LOGIN</Text>
      </View>

      <View style={styles.container_email}>
        <TextInput
          placeholder="Email"
          style={styles.style_txtInput}></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.style_txtInput}></TextInput>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E53935' }]}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text>When you agree to terms and conditions</Text>
        <Text>For got your password?</Text>
        <Text>Or login with</Text>
      </View>
      <View style={{flex:1}}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_email: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  container_header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
  },
  cus_textHeader: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '700',
  },
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },

  style_txtInput: {
    padding: 10,
    backgroundColor: '#C4C4C4',
    width: 305,
    height: 45,
  },
});

export default LoginScreen2;
