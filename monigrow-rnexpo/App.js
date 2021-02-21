import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, AppRegistry, processColor } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LineChart} from 'react-native-charts-wrapper';

import PlantTableScreen from './PlantTable.js';
import TemperatureGraph from './TemperatureGraph.js';
import PhGraph from './PhGraph.js';
import logo from './assets/MoniGrowLogo.png';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <TouchableOpacity
        style={{ 
          marginTop: 30, 
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
          marginTop: 30, 
          backgroundColor: 'red',
          width: 130,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40 }}
          onPress={() => navigation.navigate('Temperature')}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Temperature</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ 
          marginTop: 30, 
          backgroundColor: 'purple',
          width: 130,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40 }}
          onPress={() => navigation.navigate('pH')}>
        <Text style={{ fontSize: 20, color: '#fff' }}>pH</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MoniGrow" component={HomeScreen} />
        <Stack.Screen name="Database" component={PlantTableScreen} />
        <Stack.Screen name="Temperature" component={TemperatureGraph} />
        <Stack.Screen name="pH" component={PhGraph} />
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, 
    height: 100,
  },
  chart: {
    flex: 1
  }
});
