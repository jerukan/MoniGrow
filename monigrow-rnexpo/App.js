import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, AppRegistry, processColor } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase'
import 'firebase/firestore';

import PlantTableScreen from './PlantTable.js';
import TemperatureGraph from './TemperatureGraph.js';
import TemperatureGraphSys from './TemperatureGraphSys.js';
import PhGraph from './PhGraph.js';
import PhGraphSys from './PhGraphSys.js';
import logo from './assets/MoniGrowLogo.png';
import SystemScreen from './SystemScreen.js';

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
} else {
  firebase.app(); // if already initialized, use that one
}
const db = firebase.firestore();

class HomeScreenSys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sysList: []
    }
  }

  componentDidMount() {
    db.collection(`systems`).get()
      .then( querySnapshot => querySnapshot.docs.map( doc => [doc.id, doc.data()] ) )
      .then( data => this.setState( { sysList: data } ));
  }

  render() {
    const navigation = this.props.navigation;
    if (this.state.sysList.length) {
      var buttonArr = []
      for (let i = 0; i < this.state.sysList.length; i++) {
        buttonArr.push(<TouchableOpacity
          style={{ 
            marginTop: 30, 
            backgroundColor: 'green',
            width: 130,
            borderRadius: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40 }}
            onPress={() => navigation.navigate('SysScreen', {
              sysID: this.state.sysList[i][0],
              plantID: this.state.sysList[i][1].plant_type.id
            })}>
          <Text style={{ fontSize: 10, color: '#fff' }}>{this.state.sysList[i][1].sys_name}</Text>
        </TouchableOpacity>)
      }
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
            <Text style={{ fontSize: 15, color: '#fff' }}>Database</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'black', marginTop: 30, marginBottom: -10}}>Available Systems</Text>
          {buttonArr}
          <StatusBar style="auto" />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading available systems...</Text>
        </View>
      )
    }
  }
}

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
        <Stack.Screen name="Home" component={withNavigation(HomeScreenSys)} />
        <Stack.Screen name="SysScreen" component={SystemScreen} />
        <Stack.Screen name="Database" component={PlantTableScreen} />
        <Stack.Screen name="Temperature" component={TemperatureGraph} />
        <Stack.Screen name="TemperatureSys" component={TemperatureGraphSys} />
        <Stack.Screen name="pH" component={PhGraph} />
        <Stack.Screen name="pHSys" component={PhGraphSys} />
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
