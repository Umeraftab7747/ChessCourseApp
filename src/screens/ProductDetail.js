import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import Appinput from "../components/Appinput";
import Appbutton from "../components/Appbutton";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/projectSlice";

const ProductDetail = ({ navigation, route }) => {
	const { itemid } = route.params;
	const dispatch = useDispatch();
	console.log(itemid);
	const { books, cart } = useSelector((state) => state.project);
	const curentitem = books && books.find((item) => item.id === itemid);
	const addCartFun = async () => {
		await dispatch(
			setCart({
				cart: [...cart, { id: itemid }],
			})
		);
		alert("Erfolgreich in den Warenkorb gelegt");
	};
	return (
		<View style={styles.MainContainer}>
			<Header
				onPress={() => {
					navigation.goBack();
				}}
				text={""}
			/>
			<View style={styles.ImageContainer}>
				<Image source={{ uri: curentitem.imglink }} style={styles.imgshow} />
			</View>
			<ScrollView
				contentContainerStyle={{ width: w("100%"), paddingBottom: h("3%") }}>
				<Text style={styles.MainText}>{curentitem.name}</Text>
				<Text style={styles.MainText}>€ {curentitem.price}</Text>
				<Text style={styles.MainText2}>{curentitem.description}</Text>
				<Appbutton name={"In den Warenkorb legen"} onPress={addCartFun} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	MainContainer: {
		backgroundColor: "white",
		width: "100%",
		height: "100%",
	},
	ImageContainer: {
		// backgroundColor: "gold",
		width: "100%",
		height: h("40%"),
		justifyContent: "center",
		alignItems: "center",
	},
	MainText: {
		color: black,
		fontSize: h("3%"),
		fontWeight: "bold",
		marginLeft: h("2%"),
		marginTop: h("2%"),
	},
	MainText2: {
		color: "#0005",
		marginLeft: h("2%"),
		marginRight: h("2%"),
		marginVertical: h("2%"),
	},
	imgshow: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});

export default ProductDetail;
