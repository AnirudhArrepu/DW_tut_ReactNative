import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputForm from './components/inputForm.js'
import Tile from './components/itemWidget.js';
import { useEffect, useState } from 'react';
import { FAB } from 'react-native-paper';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db, storage } from './firebase.js'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function App() {

  const [data, setData] = useState([]);


  const addData = async (title, description, imageUri) =>{
    try {
        const response = await fetch(imageUri)
        const blob = await response.blob();

        const storageRef = ref(storage, `images/${title}`);

        await uploadBytes(storageRef, blob);

        const downloadUri = getDownloadURL(storageRef);

        await addDoc(collection(db, 'items'),{
            title: title,
            description: description,
            image: downloadUri
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
        console.log(doc.data().title, doc.data().description);
        loadingItems.push(doc.data());
      })
      // console.log(loadingItems);
      
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
            addData('hi', 'hellotest');
            console.log('added');
            
          }}
        />
      </View>
      <ScrollView style={styles.scrollable}>
        {
          data.map((item, index) => (
            <Tile key={index} title={item.title} description={item.description} imageUri={item.image}/>
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