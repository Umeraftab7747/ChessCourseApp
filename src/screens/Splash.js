import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { Yellow } from "../utils/color";
import { auth } from "../Database/firebaseConfig";
const Splash = ({ navigation }) => {
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setTimeout(() => {
					navigation.replace("MyTabs");
				}, 4000);
			} else {
				setTimeout(() => {
					navigation.replace("Login");
				}, 4000);
			}
		});
	}, []);

	return (
		<View style={styles.Maincontainer}>
			<View style={styles.Mainbox}>
				<Image
					style={styles.img}
					source={require("../../assets/main/bg1.png")}
				/>
				<ActivityIndicator size='large' color='#ffff' />
			</View>
			{/* <View style={[styles.Mainbox, { marginTop: h("35%") }]}></View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	Maincontainer: {
		backgroundColor: Yellow,
		flex: 1,
	},
	img: {
		width: w("50%"),
		height: w("50%"),
		resizeMode: "contain",
	},
	Mainbox: {
		// backgroundColor: "red",
		width: "70%",
		height: "100%",
		alignSelf: "center",
		marginTop: h("5%"),
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		flexDirection: "column",
	},
});

export default Splash;
