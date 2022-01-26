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
  ScrollView,
} from 'react-native';

export default class KidBottomChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   
      return (
        <View style={styles.container}>
        <ScrollView style={{width:'100%'}}>
          <SafeAreaView style={styles.area} />
          
          <ImageBackground
          source={require('../Images/Kids_chart_bottoms.png')}
          style={styles.img}>
          </ImageBackground>
          </ScrollView>
          <TouchableOpacity
           onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          </View>
      )
  }
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    width:'97%',
    height:'100%',
    alignSelf:'center',
  },

  })