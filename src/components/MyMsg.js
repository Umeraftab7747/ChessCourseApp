import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";
const MyMsg = ({ msg, isSender }) => {
	return (
		<View style={styles.msgMaindiv}>
			<View style={isSender ? styles.msg : styles.msg2}>
				{/* <View
					style={{
						width: w("10%"),
						height: w("10%"),
						backgroundColor: "red",
						borderRadius: w("20%"),
						marginRight: 10,
						borderWidth: 1,
						// borderColor: isSender ? secColor : mainColor,
					}}
				/> */}
				<Text style={isSender ? styles.msgtxt : styles.msgtxt2}>{msg}</Text>
			</View>
		</View>
	);
};

export default MyMsg;

const styles = StyleSheet.create({
	msgMaindiv: {
		width: "100%",
	},
	msg: {
		width: "90%",
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginLeft: w("10%"),
		backgroundColor: Yellow,
		borderRadius: 20,
		marginBottom: h("1.3%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	msgtxt: {
		fontSize: h("2.3%"),
		color: black,
		width: "80%",
	},
	msg2: {
		width: "90%",
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginRight: w("10%"),
		backgroundColor: black,
		borderRadius: 20,
		marginBottom: h("1.3%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	msgtxt2: {
		fontSize: h("2.3%"),
		color: Yellow,
		width: "80%",
	},
});
