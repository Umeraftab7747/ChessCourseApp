import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import Appinput from "../components/Appinput";
import Appbutton from "../components/Appbutton";
import { auth } from "../Database/firebaseConfig";
const Login = ({ navigation }) => {
	const [Email, setEmail] = React.useState("");
	const [EmailFoucs, setEmailFoucs] = React.useState(false);
	const [Passowrd, setPassowrd] = React.useState("");
	const [PassowrdFoucs, setPassowrdFoucs] = React.useState(false);
	const [isSelected, setSelection] = React.useState(false);
	const loginfunct = async () => {
		console.log(Email, Passowrd);
		let email = Email;
		let passowrd = Passowrd;
		if (Email.length > 0 && Passowrd.length > 0) {
			await auth
				.signInWithEmailAndPassword(email, passowrd)
				.then((doc) => {
					console.log("doc", doc.user.uid);
					navigation.replace("MyTabs");
				})
				.catch((e) => {
					alert(e.message);
				});
		} else {
			alert("Please fill all fields");
		}
	};
	return (
		<KeyboardAvoidingScrollView>
			<View style={styles.Maincontainer}>
				<View style={styles.Mainbox}>
					<Image
						style={styles.img}
						source={require("../../assets/main/bg2.png")}
					/>
				</View>
				<Text style={styles.weclomtxt}>Welcome!</Text>
				<Text style={styles.weclomtxt2}>Sign in and get started</Text>
				<View style={styles.InputContainer}>
					<Appinput
						name={"Email"}
						value={Email}
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
					<Appinput
						name={"Password"}
						value={Passowrd}
						onFocus={() => {
							setPassowrdFoucs(true);
						}}
						onBlur={() => {
							setPassowrdFoucs(false);
						}}
						Foucs={PassowrdFoucs}
						placeholder={"Enter Password"}
						secureTextEntry
						onChangeText={(text) => {
							setPassowrd(text);
						}}
					/>
					<Appbutton onPress={loginfunct} name={"Sign In"} />

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Forget");
						}}>
						<Text style={styles.ForgetPassword}>Forgot Password</Text>
					</TouchableOpacity>

					<View style={styles.Line} />
					<Text style={styles.ForgetPassword3}>Don’t have an account?</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Signup");
						}}>
						<Text style={styles.ForgetPassword2}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingScrollView>
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
	ForgetPassword: {
		color: "#7688D1",
		fontSize: h("2%"),
		alignSelf: "center",
		marginTop: h("2%"),
	},
	ForgetPassword3: {
		color: "#0003",
		fontSize: h("2%"),
		alignSelf: "center",
		marginTop: h("4%"),
	},
	ForgetPassword2: {
		color: "#7688D1",
		fontSize: h("3%"),
		alignSelf: "center",
	},
	Line: {
		backgroundColor: "#0003",
		width: "90%",
		height: h("0.1%"),
		marginTop: h("7%"),
		alignSelf: "center",
	},
});
export default Login;
