import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const Dashboard = () => {
  return (
    <View style={styles.MainContainer}>
      {/* Top Header */}
      <View style={styles.HeaderContainer}>
        <View style={styles.LeftContainer}>
          <Text style={styles.NameContainer}>Hola, sayef!</Text>
          <Text style={styles.NameContainer2}>
            What do you wanna learn today?
          </Text>
        </View>
        <View style={styles.RightContainer}>
          <View style={styles.ImgaeContainer}></View>
        </View>
      </View>
      {/* Top Header */}

      {/* Searchbar */}
      <View style={styles.TextInputContainer}>
        <TextInput style={styles.TextInputMainDesgin} placeholder={"Search"} />
      </View>
      {/* Searchbar */}
      <Text style={styles.ContinueText}>Continue to watch previous class</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  HeaderContainer: {
    width: "100%",
    height: h("15%"),
    // backgroundColor: "gold",
    marginTop: h("3%"),
    flexDirection: "row",
  },
  LeftContainer: {
    // backgroundColor: "red",
    width: "70%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: h("2%"),
  },
  RightContainer: {
    // backgroundColor: "green",
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  NameContainer: {
    fontSize: h("3%"),
    fontWeight: "bold",
    color: black,
  },
  NameContainer2: {
    fontSize: h("2%"),
    color: "#0003",
  },
  ImgaeContainer: {
    backgroundColor: "#0003",
    width: 50,
    height: 50,
    borderRadius: h("100%"),
  },
  TextInputContainer: {
    width: "100%",
    height: h("10%"),
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInputMainDesgin: {
    backgroundColor: "#fff",
    fontSize: h("2%"),
    width: "90%",
    height: h("7%"),
    alignSelf: "center",
    borderRadius: h("1%"),
    borderColor: "#0003",
    borderWidth: h("0.2%"),
    paddingLeft: h("1%"),
  },
  ContinueText: {
    marginLeft: h("3%"),
    fontSize: h("4%"),
    fontWeight: "bold",
  },
});

export default Dashboard;
