import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const AppCard = () => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.ImageContainer}>
        <Text>IMAGE</Text>
      </View>
      <Text style={styles.TitleText}>Online chess trainer 1200</Text>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.BtnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    width: "45%",
    height: h("32%"),
    // backgroundColor: "red",
    borderWidth: h("0.2%"),
    borderColor: "#0003",
    borderRadius: h("1%"),
    margin: h("1.1%"),
  },
  ImageContainer: {
    width: "100%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "gold",
  },
  TitleText: {
    color: black,
    fontSize: h("2%"),
    fontWeight: "bold",
    alignSelf: "center",
  },
  Button: {
    backgroundColor: Yellow,
    width: "60%",
    height: h("5%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("1%"),
    marginTop: h("0.5%"),
  },
  BtnText: {
    color: "white",
    fontSize: h("2%"),
  },
});

export default AppCard;
