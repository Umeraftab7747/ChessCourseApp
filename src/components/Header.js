import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";
import { black, Yellow } from "../utils/color";

const Header = ({ text, onPress }) => {
  return (
    <View style={styles.MainHeader}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back-outline" size={32} color={black} />
      </TouchableOpacity>
      <Text style={styles.Text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  MainHeader: {
    // backgroundColor: "red",
    width: "100%",
    height: h("10%"),
    // justifyContent: "center",
    paddingLeft: h("2%"),
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    color: black,
    fontSize: h("2.2%"),
    fontWeight: "bold",
    marginLeft: h("2%"),
  },
});
