import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import scaleTime from 'd3-scale';

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
} else {
  firebase.app(); // if already initialized, use that one
}
const db = firebase.firestore();
 
export default class PhGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentData: []
    }
    this.numFetch = 50
  }

  componentDidMount() {
    db.collection("pH").orderBy("time", "desc").limit(this.numFetch)
      .onSnapshot((querySnapshot) => {
        const snapshotArr = querySnapshot.docs.map( doc => {
          const timeObj = doc.data().time
          return [timeObj.toDate(), parseFloat(doc.data().pH)]
        })
        this.setState( { recentData: snapshotArr } )
      });
  }

  render() {
    return (
      <LineChart
        style={{ height: 200 }}
        data={this.state.recentData}
        yAccessor={({ item }) => item[1]}
        xAccessor={({ index }) => this.state.recentData[index][0]}
        xScale={scaleTime}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    )
  }
}
