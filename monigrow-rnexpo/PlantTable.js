import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import * as firebase from 'firebase'
import 'firebase/firestore';

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
const db = firebase.firestore();

function logAllPlants() {
  // test function to just print out every plant
  db.collection("plants")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
  });
}

export default class PlantTableScreen extends React.Component {
  state = {
      plants: [],
  };

  componentDidMount() {
    db.collection("plants").get()
      .then( querySnapshot => querySnapshot.docs.map( doc => doc.data() ) )
      .then( data => this.setState( { plants: data } ));
  }

  render() {
    if (this.state.plants.length) {
      // TODO: PREPARE TABLE HERE
      console.log(this.state.plants);
      const tableHead = ["name", "ph", "humidity", "eletrical conductivity", "light intensity", "O2"]
      const tableData = []
      this.state.plants.forEach(
        plant => {
          const row = [plant.name, plant.ph, plant.humidity, plant.e_conduct, plant.d_light_intense, plant.o2]
          tableData.push(row)
        }
      )
      console.log(tableData)
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} textStyle={styles.text}/>
          </Table>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff' 
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    margin: 6
  }
});
