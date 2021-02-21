//import React, { useState } from 'react';
//import { Text, View } from 'react-native'


function saveData(data, type) {
    if(type === 't') {
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/temperature').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            temp: data
        })
    }
    else if(type === 'p') {
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/pH').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            pH: data
        })
    }
    else if(type === 'at'){
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/temperature').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            temp: data
        })
    }
    else if(type === 'ap') {
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/pH').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            pH: data
        })
    }
}
function createData(num, type) {
    if(type === 't') {
        return (Math.random() * ((num+0.7) - (num-0.7)) + num - 0.7).toFixed(1)
    }
    else if(type === 'p') {
        return (Math.random() * ((num+0.5) - (num-0.5)) + num - 0.5).toFixed(1) 
    }
    else if(type === 'at') {
        return (Math.random() * ((num+10) - (num-10)) + num - 10).toFixed(1)
    }
    else if(type === 'ap') {
        return (Math.random() * ((num+0.5) - (num-0.5)) + num - 0.5).toFixed(1) 
    }
}
var iterator_t;
var iterator_p;
function startGeneration(type) {
    console.log("test");
    if(type === 't') {
        console.log("test");
        iterator_t = setInterval( function(){saveData(createData(75, type) , type)}, 5000);
    }
    else if(type === 'p') {
        iterator_p = setInterval( function(){saveData(createData(7, type) , type)}, 5000);
    }
    else if(type === 'at') {
        iterator_p = setInterval( function(){saveData(createData(10, type) , type)}, 5000);
    }
    else if(type === 'ap') {
        iterator_p = setInterval( function(){saveData(createData(1, type) , type)}, 5000);
    }
}
function stopGeneration(type) {
    if(type === 't') {
        clearInterval(iterator_t);
    }
    else if(type === 'p') {
        clearInterval(iterator_p);
    }
    else if(type === 'at') {
        clearInterval(iterator_at);
    }
    else if(type === 'ap') {
        clearInterval(iterator_ap);
    }
}
/* <button id="starttemp" >Start Generating Temperature Data</button>
    <button id="stoptemp" >Stop Generating Temperature Data</button>
    <button id="startph" >Start Generating pH Data</button>
    <button id="stopph" >Stop Generating pH Data</button> */
    startt = document.createElement('button');
    startt.textContent = 'Start Generating Temperature Data';
    document.body.append(startt);
    stopt = document.createElement('button');
    stopt.textContent = 'Stop Generating Temperature Data';
    document.body.append(stopt);
    startp = document.createElement('button'); 
    startp.textContent = 'Start Generating pH Data';
    document.body.append(startp);
    stopp = document.createElement('button'); 
    stopp.textContent = 'Stop Generating pH Data';
    document.body.append(stopp);
    startat = document.createElement('button');
    startat.textContent = 'Start Generating Abnormal Temperature Data';
    document.body.append(startat);
    stopat = document.createElement('button');
    stopat.textContent = 'Stop Generating Abnormal Temperature Data';
    document.body.append(stopat);
    startap = document.createElement('button'); 
    startap.textContent = 'Start Generating Abnormal pH Data';
    document.body.append(startap);
    stopap = document.createElement('button'); 
    stopap.textContent = 'Stop Generating Abnormal pH Data';
    document.body.append(stopap);
// const starttempgen = document.getElementById('starttemp');
// const stoptempgen = document.getElementById('stopttemp');
// const startphgen = document.getElementById('startph');
// const stopphgen = document.getElementById('stopph');
startt.addEventListener("click", function(){startGeneration('t')});
stopt.addEventListener("click", function(){stopGeneration('t')});
startp.addEventListener("click", function(){startGeneration('p')});
stopp.addEventListener("click", function(){stopGeneration('p')});
startat.addEventListener("click", function(){startGeneration('at')});
stopat.addEventListener("click", function(){stopGeneration('at')});
startap.addEventListener("click", function(){startGeneration('ap')});
stopap.addEventListener("click", function(){stopGeneration('ap')});

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'Start Data Generation' : 'Stop Data Generation'}
//                 </button>
//         );
//     }
// }
// class Generator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {tick}
//     }
//     render() {
//         <div>
//             <button>

//             </button>
//         </div>
//     }
// }


// function ActionButton() {
//     function handleClick(e) {
//         e.preventDefault();

//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );