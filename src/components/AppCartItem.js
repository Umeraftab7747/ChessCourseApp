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

const AppCartItem = ({ imglink, name, price }) => {
	return (
		<View style={styles.MainContainer}>
			<View style={styles.LeftContainer}>
				<Image source={{ uri: imglink }} style={styles.imgshow} />
			</View>
			<View style={styles.RightContainer}>
				<Text style={styles.MainText}>{name}</Text>
				<Text style={styles.MainText2}>{price}</Text>
			</View>
		</View>
	);
};

export default AppCartItem;

const styles = StyleSheet.create({
	MainContainer: {
		width: "100%",
		height: h("13%"),
		// backgroundColor: "red",
		flexDirection: "row",
		paddingLeft: h("3%"),
		overflow: "hidden",
		marginBottom: h("1%"),
	},
	LeftContainer: {
		width: "30%",
		height: "100%",
		// backgroundColor: "gold",
		justifyContent: "center",
		alignItems: "center",
	},
	RightContainer: {
		width: "65%",
		height: "100%",
		paddingLeft: w("2%"),
		// backgroundColor: "green",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "flex-start",
		flexDirection: "column",
	},
	MainText: {
		color: black,
		fontSize: h("2.2%"),
		fontWeight: "bold",
	},
	MainText2: {
		color: black,
		fontSize: h("2.1%"),
		fontWeight: "bold",
	},
	imgshow: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});
