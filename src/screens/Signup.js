import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import Appinput from "../components/Appinput";
import Appbutton from "../components/Appbutton";
import Header from "../components/Header";
import { auth, db } from "../Database/firebaseConfig";
import { useDispatch } from "react-redux";
import { setChat } from "../store/projectSlice";
const Signup = ({ navigation }) => {
	const [Name, setName] = React.useState("");
	const [NameFoucs, setNameFoucs] = React.useState(false);
	const [Email, setEmail] = React.useState("");
	const [EmailFoucs, setEmailFoucs] = React.useState(false);
	const [Passowrd, setPassowrd] = React.useState("");
	const [PassowrdFoucs, setPassowrdFoucs] = React.useState(false);
	const [isSelected, setSelection] = React.useState(false);
	const dispatch = useDispatch();
	const createAccount = async () => {
		const email = Email;
		const passowrd = Passowrd;
		if (Email.length > 0 && Passowrd.length > 0 && Name.length > 0) {
			await auth.createUserWithEmailAndPassword(email, passowrd).catch((e) => {
				alert(e.message);
			});
			await auth.onAuthStateChanged((user) => {
				const uid = user.uid;
				db.collection("userinfo")
					.doc(uid)
					.set({ email, name: Name })
					.then(() => {
						console.log("checking");
						// navigation.replace("MyTabs");
					});
				db.collection("chatSupport")
					.doc(uid)
					.set({
						customer: uid,
						email: email,
						admin: "admin",
						createdAt: new Date(),
						messages: [],
					})
					.then(() => {
						db.collection("chatSupport")
							.doc(uid)
							.onSnapshot((doc) => {
								dispatch(
									setChat({
										mesg: {
											customer: doc?.data()?.customer,
											email: doc?.data()?.email,
											admin: doc?.data()?.admin,
											messages: doc?.data()?.messages,
										},
									})
								);
							});
					});
			});
		} else {
			alert("alle Felder sind erforderlich.");
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
				<Text style={styles.weclomtxt}>Konto erstellen</Text>
				<Text style={styles.weclomtxt2}>Anmelden und Loslegen</Text>
				<View style={styles.InputContainer}>
					<Appinput
						name={"Name"}
						value={Name}
						onFocus={() => {
							setNameFoucs(true);
						}}
						onBlur={() => {
							setNameFoucs(false);
						}}
						Foucs={NameFoucs}
						placeholder={"Name eingeben"}
						onChangeText={(text) => {
							setName(text);
						}}
					/>
					<Appinput
						name={"E-Mail"}
						value={Email}
						onFocus={() => {
							setEmailFoucs(true);
						}}
						onBlur={() => {
							setEmailFoucs(false);
						}}
						Foucs={EmailFoucs}
						placeholder={"E-Mail eingeben"}
						onChangeText={(text) => {
							setEmail(text);
						}}
					/>
					<Appinput
						name={"Passwort"}
						value={Passowrd}
						onFocus={() => {
							setPassowrdFoucs(true);
						}}
						onBlur={() => {
							setPassowrdFoucs(false);
						}}
						Foucs={PassowrdFoucs}
						placeholder={"Passwort eingeben"}
						secureTextEntry
						onChangeText={(text) => {
							setPassowrd(text);
						}}
					/>
					<Appbutton onPress={createAccount} name={"Hier Registrieren"} />

					<View style={styles.Line} />
					<Text style={styles.ForgetPassword3}>Hast Du bereits ein Konto?</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}>
						<Text style={styles.ForgetPassword2}>Einloggen</Text>
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
		marginTop: h("3%"),
		alignSelf: "center",
	},
});

export default Signup;
