import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const Appinput = ({
  name,
  secureTextEntry,
  Foucs,
  onFocus,
  onBlur,
  placeholder,
  onChangeText,
}) => {
  return (
    <>
      <Text style={styles.Emailcolor}>{name}</Text>
      <TextInput
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        style={Foucs ? styles.Txtinput : styles.Txtinput2}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Txtinput: {
    // backgroundColor: "gold",
    width: "100%",
    height: h("7%"),
    borderRadius: h("1%"),
    borderColor: Yellow,
    borderWidth: h("0.2%"),
    paddingLeft: h("1%"),
    fontSize: h("2%"),
  },
  Txtinput2: {
    // backgroundColor: "gold",
    width: "100%",
    height: h("7%"),
    borderRadius: h("1%"),
    borderColor: "#0003",
    borderWidth: h("0.2%"),
    paddingLeft: h("1%"),
    fontSize: h("2%"),
    color: Yellow,
  },
  Emailcolor: {
    color: "#0003",
    fontSize: h("2.2%"),
    marginLeft: h("0.2%"),
    marginTop: h("2%"),
  },
});

export default Appinput;
