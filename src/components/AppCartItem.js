import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
	ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";
import { AntDesign } from "@expo/vector-icons";

const AppCartItem = ({ imglink, name, price, removeitm }) => {
	const [isloading, setisloading] = useState(false);
	const removefun = async () => {
		setisloading(true);
		await removeitm();
		setisloading(false);
	};
	return (
		<View style={styles.MainContainer}>
			<View style={styles.LeftContainer}>
				<Image source={{ uri: imglink }} style={styles.imgshow} />
			</View>
			<View style={styles.RightContainer}>
				<Text style={styles.MainText}>{name}</Text>
				<Text style={styles.MainText2}>{price}</Text>
			</View>
			{isloading ? (
				<View style={styles.mostRightContainer}>
					<ActivityIndicator size={"small"} color={Yellow} />
				</View>
			) : (
				<TouchableOpacity onPress={removefun} style={styles.mostRightContainer}>
					<AntDesign name='delete' size={h("4%")} color={Yellow} />
				</TouchableOpacity>
			)}
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
		width: "55%",
		height: "100%",
		paddingLeft: w("2%"),
		// backgroundColor: "green",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "flex-start",
		flexDirection: "column",
	},
	mostRightContainer: {
		width: "15%",
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
