import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BaseButton } from 'react-native-gesture-handler';

import * as firebase from 'firebase'
import 'firebase/firestore';
import logo from './assets/MoniGrowLogo.png';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5UXutMWgOAfpzPGipte3NvCh41tsY5k0",
  authDomain: "monigrow-a9692.firebaseapp.com",
  projectId: "monigrow-a9692",
  storageBucket: "monigrow-a9692.appspot.com",
  messagingSenderId: "959220826867",
  appId: "1:959220826867:web:ce706c64c76c5b6016ed86",
  measurementId: "G-VSW7L2XFSJ"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
const dbh = firebase.firestore();

function getPlants() {
  console.log(dbh.collection("plants").get())
}

{/* Add documents to firestore
firebase.firestore()
  .collection('plants')
  .add({
    name: 'test',
    pH: 4.5,
  })
  .then(() => {
    console.log('plant added');
  });
*/}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <TouchableOpacity
        style={{ 
          backgroundColor: 'blue',
          width: 130,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40 }}
          onPress={() => navigation.navigate('Database')}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Database</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ 
          backgroundColor: 'red',
          width: 130,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40 }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Temperature</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ 
          backgroundColor: 'purple',
          width: 130,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40 }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>pH</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Insert Database here :)</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MoniGrow" component={HomeScreen} />
        <Stack.Screen name="Database" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305, 
    height: 159,
  },
});
