import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { Yellow } from "../utils/color";

const Splash = () => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.Mainbox}>
        <Image
          style={styles.img}
          source={require("../../assets/main/bg1.png")}
        />
      </View>
      <View style={[styles.Mainbox, { marginTop: h("35%") }]}>
        <ActivityIndicator size="large" color="#ffff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: Yellow,
    flex: 1,
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  Mainbox: {
    // backgroundColor: "red",
    width: "70%",
    height: "30%",
    alignSelf: "center",
    marginTop: h("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
