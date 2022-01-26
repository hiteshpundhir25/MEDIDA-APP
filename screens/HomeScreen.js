import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import * as Font from 'expo-font';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.area} />
        <ImageBackground
          source={require('../Images/shelf_bimg02.jpg')}
          style={styles.img}>
          <View style={styles.titleBar}>
            <Text style={styles.titletext}>MEDIDA</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('Shoes')}>
            <Text style={styles.buttonText}>SHOES</Text>
            <Image
              source={require('../Images/shoes.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('Tops')}>
            <Text style={styles.buttonText}>TOPS</Text>
             <Image
              source={require('../Images/redT.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('Bottom')}>
            <Text style={styles.buttonText}>BOTTOMS</Text>
            <Image
              source={require('../Images/short.png')}
              style={styles.iconImage01}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titletext: {
    color: 'white',
    fontSize: 52,
    fontWeight: 'bold',
    fontFamily:'cornerstone',
    marginTop:10,
  },
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    width:'99.8%',
    alignSelf:'center',
  },
  area: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCards: {
    flex: 0.27,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#fffd74',
  },
  buttonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 80,
    marginLeft: -15,
    paddingLeft: 30,
    fontFamily:'cornerstone',
  },
   iconImage: {
    position: 'absolute',
    height: 150,
    width: 180,
    resizeMode: 'contain',
    right: -45,
    top: -50,
  },
  iconImage01: {
    position: 'absolute',
    height: 130,
    width: 130,
    resizeMode: 'contain',
    right: -45,
    top: -35,
  },
  
});
