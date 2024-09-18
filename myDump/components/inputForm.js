import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text,TextInput, StyleSheet, Button, Image, Platform, View, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
// import * as ImagePicker from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
const InputForm = () => {
    const [imageUri, setImageUri] = useState(null);
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, Camera roll permissions are required to make this work!');
            }
        }
        })();
    }, []);
    
    const chooseImg = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              aspect: [4, 3],
              quality: 1,         
              allowsEditing: true,
            });
      
            if (!result.canceled && result.assets && result.assets.length > 0) {
              setImageUri(result.assets[0].uri);
            }
          } catch (error) {
            console.log("Error picking image: ", error);
          }
    };

    return(
        <SafeAreaView>    
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Upload Image</Text>
                {imageUri && (<Image source={{uri: imageUri}} style={styles.image}/>)}
                <Button title='Choose' onPress={chooseImg}/>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.heading} value={heading} onChangeText={setHeading} placeholder='Enter..'/>
                <Text style={styles.text}>Details</Text>
                <TextInput style={styles.subheading}value={subheading} onChangeText={setSubheading} placeholder='Enter..'/>
                <Button title='Thats it!' onPress={()=>{
                    console.log(imageUri);
                    console.log(heading);
                    console.log(subheading);
                }}>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    image:{
        width: 300,
        height: 300
    },
    text:{
        fontSize: 25,
        padding: 10
    },
    button:{
        backgroundColor: 'blue',
        borderColor: 'gray'
    },
    subheading:{
        height: 250,
        width: 300,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 2,
        padding: 20
    },
    heading:{
        height:50,
        width: 300,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 2,
        padding: 20
    }
})

export default InputForm