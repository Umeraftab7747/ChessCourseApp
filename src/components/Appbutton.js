import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const Appbutton = ({ name, onPress }) => {
	const [isLoading, setisLoading] = useState(false);
	const onPressFun = async () => {
		setisLoading(true);
		await onPress();
		setisLoading(false);
	};
	return (
		<>
			{isLoading ? (
				<View style={styles.MainContainer}>
					<ActivityIndicator size={"large"} color={"white"} />
				</View>
			) : (
				<TouchableOpacity onPress={onPressFun} style={styles.MainContainer}>
					<Text style={styles.ButtonColor}>{name}</Text>
				</TouchableOpacity>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	MainContainer: {
		backgroundColor: Yellow,
		width: "80%",
		height: h("7%"),
		marginTop: h("2%"),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: h("1%"),
		alignSelf: "center",
	},
	ButtonColor: {
		color: "white",
		fontSize: h("2.2%"),
	},
});

export default Appbutton;
