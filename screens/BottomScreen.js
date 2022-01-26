import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import * as Font from 'expo-font';

export default class BottomScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.area} />
        <ImageBackground
          source={require('../Images/shelf_bimg02.jpg')}
          style={styles.img}>
          <Text style={styles.shoeText}>BOTTOMS</Text>
          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('MenBottomChart')}>
            <Text style={styles.buttonText}>MEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('WomenBottomChart')}>
            <Text style={styles.buttonText01}>WOMEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('KidBottomChart')}>
            <Text style={styles.buttonText}>KIDS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text>Back</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    width: '99.8%',
    alignSelf: 'center',
  },
  shoeText: {
    color: 'white',
    fontSize: 52,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 30,
    fontFamily: 'cornerstone',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 35,
    paddingLeft: 30,
    fontFamily: 'cornerstone',
  },
  buttonText01: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    paddingLeft: 30,
    fontFamily: 'cornerstone',
  },
  routeCards: {
    flex: 0.15,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: '#fffd74',
  },
});
