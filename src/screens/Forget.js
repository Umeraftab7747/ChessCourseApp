import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import Appinput from "../components/Appinput";
import Appbutton from "../components/Appbutton";
import Header from "../components/Header";

const Forget = ({ navigation }) => {
  const [Email, setEmail] = React.useState("");
  const [EmailFoucs, setEmailFoucs] = React.useState(false);

  return (
    <View style={styles.Maincontainer}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        text={"Back"}
      />
      <View style={styles.Mainbox}>
        <Image
          style={styles.img}
          source={require("../../assets/main/sad.png")}
        />
      </View>
      <Text style={styles.weclomtxt}>Reset Password</Text>
      <Text style={styles.weclomtxt2}>
        Enter your email to get a new password
      </Text>

      <View style={styles.InputContainer}>
        <Appinput
          name={"Email"}
          onFocus={() => {
            setEmailFoucs(true);
          }}
          onBlur={() => {
            setEmailFoucs(false);
          }}
          Foucs={EmailFoucs}
          placeholder={"Enter Email"}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <Appbutton
          onPress={() => {
            alert("HLLOW");
          }}
          name={"Reset"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: "white",
    width: w("100%"),
    height: h("100%"),
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  Mainbox: {
    // backgroundColor: "red",
    width: "40%",
    height: "20%",
    alignSelf: "center",
    marginTop: h("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  weclomtxt: {
    color: black,
    fontSize: h("3%"),
    fontWeight: "bold",
    alignSelf: "center",
  },
  weclomtxt2: {
    color: "#0003",
    fontSize: h("2.2%"),
    alignSelf: "center",
  },
  InputContainer: {
    // backgroundColor: "red",
    width: "90%",
    height: h("70%"),
    alignSelf: "center",
    paddingTop: h("2%"),
  },
});

export default Forget;
