import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const AppCartItem = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.LeftContainer}>
        <Text>IMAGE</Text>
      </View>
      <View style={styles.RightContainer}>
        <Text style={styles.MainText}>Online chess trainer 1200</Text>
        <Text style={styles.MainText2}>€70.55</Text>
      </View>
    </View>
  );
};

export default AppCartItem;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: h("17%"),
    // backgroundColor: "red",
    flexDirection: "row",
    paddingLeft: h("3%"),
  },
  LeftContainer: {
    width: "30%",
    height: "100%",
    // backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  RightContainer: {
    width: "65%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    // alignItems: "center",
  },
  MainText: {
    color: black,
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  MainText2: {
    color: black,
    fontSize: h("2.1%"),
    fontWeight: "bold",
  },
});
