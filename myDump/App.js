import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputForm from './components/inputForm.js'
import Tile from './components/itemWidget.js';
import { useEffect, useState } from 'react';
import { FAB } from 'react-native-paper';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db, storage } from './firebase.js'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/homeScreen.js';


const stack = createNativeStackNavigator();

// import { Link } from 'expo-router'

export default function App() {
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName = 'Home'>
        <stack.Screen name="H O M E" component={HomeScreen}/>
        <stack.Screen name="A D D  I T E M" component={InputForm}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // marginTop: 70
  },
  scrollable:{
    flex: 1,
    width: '100%',
  },
  appbar:{
    alignItems: 'center',
    gap: 70,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection:'row',
    marginTop: 60,
    margin: 20
  },
  text:{
    fontSize: 30,
  }
});