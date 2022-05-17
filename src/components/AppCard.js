import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

const AppCard = ({ imglink, name, price, onPress }) => {
	return (
		<View style={styles.Maincontainer}>
			<View style={styles.ImageContainer}>
				<Image source={{ uri: imglink }} style={styles.imgshow} />
			</View>
			<View style={styles.textcont}>
				<Text style={styles.TitleText}>
					{name?.length > 44 ? name.substring(0, 38) + "..." : name}
				</Text>
				<TouchableOpacity onPress={onPress} style={styles.Button}>
					<Text style={styles.BtnText}>{price}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Maincontainer: {
		width: "45%",
		height: h("32%"),
		// backgroundColor: "red",
		borderWidth: h("0.2%"),
		borderColor: "#0003",
		borderRadius: h("1%"),
		margin: h("1.1%"),
	},
	ImageContainer: {
		width: "100%",
		height: "50%",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "gold",
	},
	textcont: {
		width: "100%",
		height: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	TitleText: {
		color: black,
		fontSize: h("2%"),
		fontWeight: "bold",
		alignSelf: "center",
	},
	Button: {
		backgroundColor: Yellow,
		width: "60%",
		height: h("5%"),
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: h("1%"),
		marginTop: h("0.5%"),
	},
	BtnText: {
		color: "white",
		fontSize: h("2%"),
	},
	imgshow: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});

export default AppCard;
