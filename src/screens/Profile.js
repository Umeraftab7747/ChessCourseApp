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
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Database/firebaseConfig";
import { setAuth } from "../store/authSlice";

const Profile = ({ navigation }) => {
	const { isAuth } = useSelector((state) => state.auth);
	console.log(isAuth);
	const logoutFunct = () => {
		const dispatch = useDispatch();
		auth.signOut();
		dispatch(setAuth({ auth: null }));
		navigation.replace("Login");
	};
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
					<View style={styles.ProfileImage}>
						<Image
							style={styles.imgshow}
							source={{
								uri: "data:image/png;base64,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",
							}}
						/>
					</View>
				</View>
				<View style={styles.MainText}>
					<Text style={styles.nameText}>{isAuth.name}</Text>
					<Text style={styles.MailText}>{isAuth.email}</Text>
				</View>
			</View>
			{/* Images */}

			{/* Profile Details */}
			<View style={styles.Fields}>
				<Text style={styles.nameFields}>Name</Text>
				<Text style={{ ...styles.nameFields2, textTransform: "capitalize" }}>
					{isAuth.name}
				</Text>

				<Text style={styles.nameFields}>Email</Text>
				<Text style={styles.nameFields2}>{isAuth.email}</Text>
				<Appbutton name={"Logout"} onPress={logoutFunct} />
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
		textTransform: "capitalize",
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
	imgshow: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});
export default Profile;
