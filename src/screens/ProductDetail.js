import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import Appinput from "../components/Appinput";
import Appbutton from "../components/Appbutton";
import Header from "../components/Header";

const ProductDetail = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        text={"Pass Parm here"}
      />
      <View style={styles.ImageContainer}>
        <Text>HELLO WORLD</Text>
      </View>
      <Text style={styles.MainText}>Online chess trainer 1200</Text>
      <Text style={styles.MainText2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </Text>
      <Appbutton name={"Add To Cart"} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  ImageContainer: {
    // backgroundColor: "gold",
    width: "100%",
    height: h("40%"),
    justifyContent: "center",
    alignItems: "center",
  },
  MainText: {
    color: black,
    fontSize: h("3%"),
    fontWeight: "bold",
    marginLeft: h("2%"),
  },
  MainText2: {
    color: "#0005",
    marginLeft: h("2%"),
    marginRight: h("2%"),
  },
});

export default ProductDetail;
