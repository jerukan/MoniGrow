import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

function logPlant() {
  var docRef = db.collection("plants").doc("672Z9tN7JCmjA4AdiIrl");
  docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}

function logAllPlants() {
  db.collection("plants")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
  });
}

async function getAllPlants() {
  var plantArray = [];
  var snapshot = await db.collection("plants").get()
  snapshot.forEach((doc) => {
    plantArray.push(doc.data());
  });
  console.log(plantArray)
  return plantArray;
}

function loadTable() {
  // TODO implement this i guess
  var plantArr = getAllPlants()
  // use this plant array to generate table or something
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Insert Database here :)</Text>
    </View>
  )
}

function PlantTableScreen() {
  var thing = loadTable()
  console.log(thing)
  return thing
}

export default PlantTableScreen;
