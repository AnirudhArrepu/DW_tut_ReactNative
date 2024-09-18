import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Button, Image, Platform, ScrollView, View, KeyboardAvoidingViewComponent, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

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

  return (
    <SafeAreaView style={styles.safeArea}>

        <View style={styles.container2}>
            <Icon style={styles.icon} name="arrow-back" size={24} color="black" />
            <Text style={styles.text}>N E W    I T E M</Text>
        </View>
        
        
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.text}>Name</Text>

        <TextInput
          style={styles.input}
          value={heading}
          onChangeText={setHeading}
          placeholder='Enter name...'
        />

        <Text style={styles.text}>Details</Text>
        
        <TextInput
        style={[styles.input, styles.subheading]}
        value={subheading}
        onChangeText={setSubheading}
        placeholder='Enter details...'
        multiline={true}
        />

        <Text style={styles.text}>Upload Image</Text>
        
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
        ) : (
          <Text>No image selected</Text>
        )}

        <Button title='Choose Image' onPress={chooseImg} />

        <Button title='Submit' onPress={() => {
          console.log('Image URI:', imageUri);
          console.log('Heading:', heading);
          console.log('Subheading:', subheading);
        }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container:{
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },    
  container2:{
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  icon:{
    padding: 10,
    margin: 4,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  text: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginVertical: 10,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  subheading: {
    height: 150,
    textAlignVertical: 'top',
  },
});

export default InputForm;
