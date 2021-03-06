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
    else if(type === 'lat'){
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/temperature').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            temp: data
        })
    }
    else if(type === 'lap') {
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/pH').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            pH: data
        })
    }
    else if(type === 'uat'){
        return firebase.firestore().collection('systems/UcHOLsVH3n1vjyGyXY4u/temperature').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            temp: data
        })
    }
    else if(type === 'uap') {
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
    else if(type === 'lat') {
        return (Math.random() * ((num+5) - (num-5)) + num - 5).toFixed(1)
    }
    else if(type === 'lap') {
        return (Math.random() * ((num+0.5) - (num-0.5)) + num - 0.5).toFixed(1) 
    }
    else if(type === 'uat') {
        return (Math.random() * ((num+5) - (num-5)) + num - 5).toFixed(1)
    }
    else if(type === 'uap') {
        return (Math.random() * ((num+0.5) - (num-0.5)) + num - 0.5).toFixed(1) 
    }
}
var iterator_t;
var iterator_p;
var iterator_lap;
var iterator_lat;
var iterator_uap;
var iterator_uat;
function startGeneration(type) {
    console.log("test");
    if(type === 't') {
        console.log("test");
        iterator_t = setInterval( function(){saveData(createData(75, type) , type)}, 5000);
    }
    else if(type === 'p') {
        iterator_p = setInterval( function(){saveData(createData(7, type) , type)}, 5000);
    }
    else if(type === 'lat') {
        iterator_p = setInterval( function(){saveData(createData(30, type) , type)}, 5000);
    }
    else if(type === 'lap') {
        iterator_p = setInterval( function(){saveData(createData(3, type) , type)}, 5000);
    }
    else if(type === 'uat') {
        iterator_p = setInterval( function(){saveData(createData(90, type) , type)}, 5000);
    }
    else if(type === 'uap') {
        iterator_p = setInterval( function(){saveData(createData(9, type) , type)}, 5000);
    }
}

function stopGeneration(type) {
    if(type === 't') {
        clearInterval(iterator_t);
    }
    else if(type === 'p') {
        clearInterval(iterator_p);
    }
    else if(type === 'lat') {
        clearInterval(iterator_uat);
    }
    else if(type === 'lap') {
        clearInterval(iterator_uap);
    }
    else if(type === 'uat') {
        clearInterval(iterator_uat);
    }
    else if(type === 'uap') {
        clearInterval(iterator_uap);
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
    startlat = document.createElement('button');
    startlat.textContent = 'Start Generating LOWER Abnormal Temperature Data';
    document.body.append(startlat);
    stoplat = document.createElement('button');
    stoplat.textContent = 'Stop Generating LOWER Abnormal Temperature Data';
    document.body.append(stoplat);
    startlap = document.createElement('button'); 
    startlap.textContent = 'Start Generating LOWER Abnormal pH Data';
    document.body.append(startlap);
    stoplap = document.createElement('button'); 
    stoplap.textContent = 'Stop Generating LOWER Abnormal pH Data';
    document.body.append(stoplap);
    startuat = document.createElement('button');
    startuat.textContent = 'Start Generating UPPER Abnormal Temperature Data';
    document.body.append(startuat);
    stopuat = document.createElement('button');
    stopuat.textContent = 'Stop Generating UPPER Abnormal Temperature Data';
    document.body.append(stopuat);
    startuap = document.createElement('button'); 
    startuap.textContent = 'Start Generating UPPER Abnormal pH Data';
    document.body.append(startuap);
    stopuap = document.createElement('button'); 
    stopuap.textContent = 'Stop Generating UPPER Abnormal pH Data';
    document.body.append(stopuap);
// const starttempgen = document.getElementById('starttemp');
// const stoptempgen = document.getElementById('stopttemp');
// const startphgen = document.getElementById('startph');
// const stopphgen = document.getElementById('stopph');
startt.addEventListener("click", function(){startGeneration('t')});
stopt.addEventListener("click", function(){stopGeneration('t')});
startp.addEventListener("click", function(){startGeneration('p')});
stopp.addEventListener("click", function(){stopGeneration('p')});
startlat.addEventListener("click", function(){startGeneration('lat')});
stoplat.addEventListener("click", function(){stopGeneration('lat')});
startlap.addEventListener("click", function(){startGeneration('lap')});
stoplap.addEventListener("click", function(){stopGeneration('lap')});
startlat.addEventListener("click", function(){startGeneration('uat')});
stoplat.addEventListener("click", function(){stopGeneration('uat')});
startlap.addEventListener("click", function(){startGeneration('uap')});
stoplap.addEventListener("click", function(){stopGeneration('uap')});

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