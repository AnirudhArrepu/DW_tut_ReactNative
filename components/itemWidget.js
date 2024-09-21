import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";

function Tile({ title, description, imageUri }) {
  return (
    <View style={styles.parent}>
      <View style={styles.tile}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.divisionContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    margin: 5,
    
  },
  tile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 150,
    borderRadius: 15,
    shadowColor: '#252422',  
    elevation: 20,   

  },
  image: {
    width: 170,
    height: 150,
    marginRight: 20,
    borderTopLeftRadius: 10,  
    borderBottomLeftRadius: 10, 
  },
  
  divisionContainer: {
    paddingTop: 20,
  },
  title: {
    color: "#353535",
    fontWeight: "500",
    fontSize: 25,
  },
  description: {
    color: "#353535",
    fontSize: 16,
  },
});

export default Tile;
