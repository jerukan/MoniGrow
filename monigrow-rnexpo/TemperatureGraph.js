import React from 'react'
import { View } from 'react-native'
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
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
 
export default class TemperatureGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentData: []
    }
    this.numFetch = 50
    // polling in 15 second cycles
    // this.interval = setInterval(this.fetchRecentData, 15000)
  }

  componentDidMount() {
    db.collection("Temperature").orderBy("time", "desc").limit(this.numFetch)
      .onSnapshot((querySnapshot) => {
        var snapData = []
        querySnapshot.docs.forEach( doc => {
          const timeObj = doc.data().time
          snapData.push({time: timeObj.toDate(), temp: doc.data().temp})
        })
        this.setState( { recentData: snapData } )
      });
    // this.fetchRecentData()
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  // fetchRecentData = async () => {}

  render() {
    const contentInset = { top: 20, bottom: 20 }
    return (
      <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
        <YAxis
          style={{ marginHorizontal: 0 }}
          data={this.state.recentData}
          yAccessor={({ value }) => value.temp}
          contentInset={contentInset}
          svg={{
              fill: 'grey',
              fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value.temp}ºF`}
        />
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={this.state.recentData}
          xAccessor={({ index }) => this.state.recentData[index].time}
          scale={scaleTime}
          formatLabel={((value, index) => value.temp)}
          contentInset={contentInset}
          svg={{ fontSize: 10, fill: 'black' }}
        />
        <LineChart
          style={{ height: 200 }}
          data={this.state.recentData}
          xAccessor={({ index }) => this.state.recentData[index].time}
          yAccessor={({ value }) => value.temp}
          xScale={scaleTime}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
      </View>
    )
  }
}
