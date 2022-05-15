import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const Appbutton = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
      <Text style={styles.ButtonColor}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: Yellow,
    width: "80%",
    height: h("7%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("1%"),
    alignSelf: "center",
  },
  ButtonColor: {
    color: "white",
    fontSize: h("2.2%"),
  },
});

export default Appbutton;
