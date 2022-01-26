import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopsScreen from './screens/TopsScreen';
import HomeScreen from './screens/HomeScreen';
import ShoesScreen from './screens/ShoesScreen';
import BottomScreen from './screens/BottomScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenTopChart from './screens/MenTopChart';
import MenBottomChart from './screens/MenBottomChart';
import MenShoesChart from './screens/MenShoesChart';
import WomenTopChart from './screens/WomenTopChart';
import WomenShoesChart from './screens/WomenShoesChart';
import WomenBottomChart from './screens/WomenBottomChart';
import KidTopChart from './screens/KidTopChart';
import KidBottomChart from './screens/KidBottomChart';
import KidShoesChart from './screens/KidShoesChart';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tops" component={TopsScreen} />
        <Stack.Screen name="Shoes" component={ShoesScreen} />
        <Stack.Screen name="Bottom" component={BottomScreen} />
        <Stack.Screen name="MenTopChart" component={MenTopChart} />
        <Stack.Screen name="MenBottomChart" component={MenBottomChart} />
        <Stack.Screen name="MenShoesChart" component={MenShoesChart} />
        <Stack.Screen name="WomenTopChart" component={WomenTopChart} />
        <Stack.Screen name="WomenShoesChart" component={WomenShoesChart} />
        <Stack.Screen name="WomenBottomChart" component={WomenBottomChart} />
        <Stack.Screen name="KidTopChart" component={KidTopChart} />
        <Stack.Screen name="KidBottomChart" component={KidBottomChart} />
        <Stack.Screen name="KidShoesChart" component={KidShoesChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
