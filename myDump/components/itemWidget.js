import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";


function Tile({ title, description, imageUri }) {

  return (
    <View style={styles.parent}>
      <View style={styles.tile}>
        <Image
          source={{uri: imageUri}} 
          style={styles.image} 
        />
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
    margin: 10,
    marginTop: 25,
  },
  tile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start", 
    alignItems: "center", 
    padding: 10,
    backgroundColor: "#e76f51",
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
  image: {
    width: 170, 
    height: 150, 
    borderRadius: 10, 
    marginRight: 20, 
  },
  divisionContainer: {
    flex: 1, 
  },
  title: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 25,
  },
  description: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default Tile;