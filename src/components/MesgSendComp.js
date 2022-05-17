import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { Feather } from "@expo/vector-icons";
import { black, Yellow } from "../utils/color";
const MesgSendComp = ({ value, onChange, onPressFun }) => {
	return (
		<View style={styles.mainDiv}>
			<TextInput
				value={value}
				onChangeText={onChange}
				style={styles.inputField}
				placeholderTextColor={black}
				placeholder='Message'
			/>
			<TouchableOpacity
				style={styles.backbutton}
				onPress={() => {
					onPressFun();
				}}>
				<Feather name='send' size={w("6%")} color={black} />
			</TouchableOpacity>
		</View>
	);
};

export default MesgSendComp;

const styles = StyleSheet.create({
	mainDiv: {
		width: "100%",
		height: h("7%"),
		backgroundColor: Yellow,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	inputField: {
		height: "90%",
		width: "85%",
		paddingHorizontal: h("2%"),
		color: black,
		fontSize: h("2.2%"),
	},
	backbutton: {
		height: h("6%"),
		width: h("6%"),
		borderRadius: h("6%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		backgroundColor: Yellow,
		borderWidth: 2,
		borderColor: black,
		// shadowColor: "#000",
		// shadowOffset: {
		//   width: 0,
		//   height: 1,
		// },
		// shadowOpacity: 0.22,
		// shadowRadius: 2.22,

		// elevation: 3,
	},
});
