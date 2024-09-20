import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputForm from './inputForm.js'
import Tile from './itemWidget.js';
import { useEffect, useState } from 'react';
import { FAB } from 'react-native-paper';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db, storage } from '../firebase.js'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

// import { Link } from 'expo-router'

export default function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const readData = async () => {
        const querySnapshot = await getDocs(collection(db, 'items'));
        let loadingItems = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data().title, doc.data().description);
          loadingItems.push(doc.data());
        });
        setData(loadingItems);
      };

      readData();
    }, [])
  );

  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollable}>
        {
          data.map((item, index) => (
            <Tile key={index} title={item.title} description={item.description} imageUri={item.image}/>
          ))
        }
      </ScrollView>
      <FAB
            style={styles.fab}
            icon="plus"
            onPress={()=> navigation.navigate('A D D  I T E M')}
          />
    </View>
  ); 
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