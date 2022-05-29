import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import Appinput from "../components/Appinput";
import Appbutton from "../components/Appbutton";
import Header from "../components/Header";
import { auth } from "../Database/firebaseConfig";
const Forget = ({ navigation }) => {
	const [Email, setEmail] = React.useState("");
	const [EmailFoucs, setEmailFoucs] = React.useState(false);
	const resetfunct = async () => {
		if (Email.length > 0) {
			console.log(Email);
			await auth.sendPasswordResetEmail(Email).then(() => {
				//Reset Password Link is sent by email
				alert(
					"Der Link zum Zurücksetzen des Passworts wird per E-Mail gesendet"
				);
			});
		} else {
			//Plaese enter email
			alert("Bitte E-Mail eingeben.");
		}
	};
	return (
		<View style={styles.Maincontainer}>
			{/* back */}
			<Header
				onPress={() => {
					navigation.goBack();
				}}
				text={"Zurück"}
			/>
			<View style={styles.Mainbox}>
				<Image
					style={styles.img}
					source={require("../../assets/main/sad.png")}
				/>
			</View>
			{/* Reset Password */}
			<Text style={styles.weclomtxt}>Passwort zurücksetzen</Text>
			{/* Enter your email to get a new password */}
			<Text style={styles.weclomtxt2}>
				Trage hier Deine Email ein, um ein neues Passwort zu ehalten
			</Text>
			<View style={styles.InputContainer}>
				<Appinput
					name={"Email"}
					onFocus={() => {
						setEmailFoucs(true);
					}}
					value={Email}
					onBlur={() => {
						setEmailFoucs(false);
					}}
					Foucs={EmailFoucs}
					placeholder={"Bitte E-Mail eingeben"}
					onChangeText={(text) => {
						setEmail(text);
					}}
				/>

				<Appbutton onPress={resetfunct} name={"Abschicken"} />
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
