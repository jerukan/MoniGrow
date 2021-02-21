import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { Line } from 'react-native-svg'
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
 
export default class PhGraphSys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentData: [],
      idealValue: 0
    }
    this.numFetch = 50
  }

  componentDidMount() {
    db.collection(`systems/${this.props.route.params.sysID}/pH`).orderBy("time", "desc").limit(this.numFetch)
      .onSnapshot((querySnapshot) => {
        var snapData = []
        querySnapshot.docs.forEach( doc => {
          const timeObj = doc.data().time
          snapData.push({time: timeObj.toDate(), ph: parseFloat(doc.data().pH)})
        })
        this.setState( { recentData: snapData } )
      });
    db.collection("plants").doc(`${this.props.route.params.plantID}`).get()
      .then(doc => {
        console.log(doc.data())
        this.setState( { idealValue: doc.data().ph } )
      })
  }

  render() {
    if (this.state.recentData.length) {
      const HorizontalLine = (({ y }) => (
        <Line
            key={ 'zero-axis' }
            x1={ '0%' }
            x2={ '100%' }
            y1={ y(this.state.idealValue) }
            y2={ y(this.state.idealValue) }
            stroke={ 'green' }
            strokeDasharray={ [ 8, 8 ] }
            strokeWidth={ 2 }
        />
    ))
      const contentInset = { top: 10, bottom: 10 }
      const xAxisHeight = 30
      const phMin = 0
      const phMax = 14
      return (
        <View style={{ height: 350, padding: 20, flexDirection: 'row' }}>
          <YAxis
            style={{ marginBottom: xAxisHeight }}
            data={this.state.recentData}
            yAccessor={({ item }) => item.ph}
            contentInset={contentInset}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            min={phMin}
            max={phMax}
            numberOfTicks={10}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ flex: 1 }}
              data={this.state.recentData}
              xAccessor={({ item }) => item.time}
              yAccessor={({ item }) => item.ph}
              xScale={scaleTime}
              yMin={phMin}
              yMax={phMax}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={contentInset}
            >
              <Grid />
              <HorizontalLine />
            </LineChart>
            <XAxis
              style={{ marginHorizontal: -10, height: xAxisHeight }}
              data={this.state.recentData}
              xAccessor={({ item }) => item.time}
              scale={scaleTime}
              formatLabel={((value) => {
                const date = new Date(value)
                var hrs = date.getHours()
                var mins = date.getMinutes()
                var sec = date.getSeconds()
                if (hrs < 10) {
                  hrs = "0" + hrs
                }
                if (mins < 10) {
                  mins = "0" + mins
                }
                if (sec < 10) {
                  sec = "0" + sec
                }
                return hrs + ":" + mins + ":" + sec
              })}
              contentInset={contentInset}
              numberOfTicks={5}
              svg={{
                fontSize: 10,
                fill: 'black' 
              }}
            />
          </View>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading graph...</Text>
        </View>
      )
    }
  }
}
