import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';

const DisplayAnImage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#00CCF9' }}>
      <View style={{ flex: 3, backgroundColor: 'red' }}></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.baseText, styles.titleText]}>GROW </Text>
        <Text style={[styles.baseText, styles.titleText]}>YOUR BUSINESS</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: '5%',
        }}>
        <Text style={[styles.baseText, styles.textDescription]}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Button
          style={(styles.button, styles.buttonText)}
          title="LOGIN"
          color="#E3C000"></Button>
        <Button style={styles.button} title="SIGN UP" color="#E3C000"></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  baseText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  titleText: {
    fontSize: '25px',
    fontWeight: '700',
  },
  textDescription: {
    fontSize: 15,
  },
});
export default DisplayAnImage;
