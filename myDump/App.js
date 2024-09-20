import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputForm from './components/inputForm.js'
import Tile from './components/itemWidget.js';
import { useEffect, useState } from 'react';
import { FAB } from 'react-native-paper';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db } from './firebase.js'

export default function App() {

  const [data, setData] = useState([
    {title: 'hi', description: '300'},
    {title: 'hi', description: '400'},
    {title: 'hi', description: '500'},
    {title: 'hi', description: '600'},
    {title: 'hi', description: '700'},
  ]);


  const addData = async (title, description) =>{
    try {
        await addDoc(collection(db, 'items'),{
            title: title,
            description: description
        });
    }catch(e){
        console.error('error in add data', e);
    }
  }

  
  useEffect(()=>{
    const readData = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      let loadingItems = [];
      querySnapshot.forEach((doc)=>{
        console.log(doc);
        loadingItems.push(doc);
      })
      setData(loadingItems);
    }
    readData();
  }, [])

  return (
    <View style={styles.container}>
      {/* <InputForm/> */}
      <View style={styles.appbar}>
        <Text style={styles.text}>H E L L O</Text>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={()=>{

          }}
        />
      </View>
      <ScrollView style={styles.scrollable}>
        {
          data.map((item, index) => (
            <Tile key={index} title={item.title} description={item.description} />
          ))
        }
      </ScrollView>
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