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

// components
import Appbutton from "../components/Appbutton";

const Profile = () => {
  return (
    <View style={styles.MainCart}>
      {/* header */}
      <View style={styles.MainContainer}>
        <View style={styles.leftcontainer}>
          <Image
            style={styles.cartImg}
            source={require("../../assets/main/acc.png")}
          />
        </View>
        <View style={styles.Rightcontainer}>
          <Text style={styles.cartText}>Profile</Text>
        </View>
      </View>
      {/* header */}
      {/* Images */}
      <View style={styles.ProfileHeader}>
        <View style={styles.MainProfile}>
          <View style={styles.ProfileImage}></View>
        </View>
        <View style={styles.MainText}>
          <Text style={styles.nameText}>Anna Johnson</Text>
          <Text style={styles.MailText}>abc@gmail.com</Text>
        </View>
      </View>
      {/* Images */}

      {/* Profile Details */}
      <View style={styles.Fields}>
        <Text style={styles.nameFields}>Name</Text>
        <Text style={styles.nameFields2}>Umer Aftab</Text>

        <Text style={styles.nameFields}>Email</Text>
        <Text style={styles.nameFields2}>UmerAftab@gmail.com</Text>

        <Text style={styles.nameFields}>Name</Text>
        <Text style={styles.nameFields2}>Umer Aftab</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainCart: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  MainContainer: {
    width: "100%",
    height: h("10%"),
    // backgroundColor: "red",
    marginTop: h("5%"),
    flexDirection: "row",
  },
  leftcontainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "gold",
  },
  Rightcontainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  cartImg: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  cartText: {
    color: black,
    fontSize: h("2.8%"),
    fontWeight: "bold",
  },
  line: {
    backgroundColor: "#0003",
    width: "80%",
    alignSelf: "center",
    height: h("0.2%"),
    borderRadius: h("100%"),
  },
  ProfileImage: {
    backgroundColor: Yellow,
    width: 120,
    height: 120,
    borderRadius: h("100%"),
  },
  ProfileHeader: {
    // backgroundColor: "green",
    width: "100%",
    height: "20%",
    flexDirection: "row",
  },
  MainText: {
    width: "60%",
    height: "100%",
    // backgroundColor: "gold",
    justifyContent: "center",
    paddingLeft: h("2%"),
  },
  MainProfile: {
    width: "35%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    color: black,
    fontSize: h("3%"),
    fontWeight: "bold",
  },
  MailText: {
    color: "#0003",
    fontSize: h("2.2%"),
  },
  Fields: {
    // backgroundColor: "red",
    width: "85%",
    height: h("30%"),
    alignSelf: "center",
    paddingTop: h("2%"),
  },
  nameFields: {
    color: black,
    fontSize: h("2.9%"),
    fontWeight: "bold",
    marginTop: h("2%"),
  },
  nameFields2: {
    color: black,
    fontSize: h("2.2%"),
  },
});
export default Profile;
