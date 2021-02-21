import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, AppRegistry, processColor } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation';

class SystemScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
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
          onPress={() => navigation.navigate('TemperatureSys', {
            sysID: this.props.route.params.sysID
          })}>
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
          onPress={() => navigation.navigate('pHSys', {
            sysID: this.props.route.params.sysID
          })}>
        <Text style={{ fontSize: 20, color: '#fff' }}>pH</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withNavigation(SystemScreen)
