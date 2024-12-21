// import { View, TextInput, Text, Image, StyleSheet, Alert, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import React, { useState, Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../../screens/login'
// import App from '../../App'
import HomeScreen from '../../screens/Home'


const Stack = createNativeStackNavigator()



// const App = () => {
//   const _onPressButton= () =>{
//     Alert.alert('pressed')
//   }
//   return(
//     // <LoginPage/>
//     "a"
//   )
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   }
// });

export default ()=>{
  return(<HomeScreen />)
}