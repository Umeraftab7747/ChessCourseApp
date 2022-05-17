import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import AppCartItem from "../components/AppCartItem";
import Appbutton from "../components/Appbutton";
import { useSelector } from "react-redux";

const Cart = () => {
	const { cart, books } = useSelector((state) => state.project);
	const [totalPrice, settotalPrice] = useState(0);
	useEffect(() => {
		// setInterval(() => {
		if (books.length > 0 && cart.length > 0) {
			let newtotal = 0;
			cart.map((dat, index) => {
				let datas = books.find((itm) => itm.id === dat.id);
				if (datas) {
					newtotal = newtotal + datas.price;
					console.log(index);
				}
				settotalPrice(newtotal);
			});
		}
		// }, 5000);
	}, [cart]);

	useLayoutEffect(() => {
		if (books.length > 0 && cart.length > 0) {
			let newtotal = 0;
			cart.map((dat, index) => {
				let datas = books.find((itm) => itm.id === dat.id);
				if (datas) {
					newtotal = newtotal + datas.price;
					console.log(index);
				}
				settotalPrice(newtotal);
			});
		}
	}, []);
	return (
		<View style={styles.MainCart}>
			{/* header */}
			<View style={styles.MainContainer}>
				<View style={styles.leftcontainer}>
					<Image
						style={styles.cartImg}
						source={require("../../assets/main/cart.png")}
					/>
				</View>
				<View style={styles.Rightcontainer}>
					<Text style={styles.cartText}>Cart</Text>
				</View>
			</View>
			{/* header */}
			<FlatList
				data={cart}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => {
					const newdata = books && books.find((itm) => itm.id === item.id);
					return (
						<AppCartItem
							imglink={newdata.imglink}
							name={newdata.name}
							price={"€" + newdata.price}
						/>
					);
				}}
			/>

			{/* line */}
			<View style={styles.line} />
			<View style={styles.NetTotal}>
				<Text style={styles.TotalCart}>Total</Text>
				<Text style={styles.TotalCart2}>€{totalPrice}</Text>
			</View>
			<Text style={styles.paymentEtc}>
				The total amount is for one payment. No subscription!
			</Text>
			<Appbutton name={"Checkout"} />
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
	NetTotal: {
		width: "80%",
		height: "10%",
		// backgroundColor: "red",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	TotalCart: {
		color: black,
		fontSize: h("2.2%"),
		fontWeight: "bold",
	},
	TotalCart2: {
		color: Yellow,
		fontSize: h("2.2%"),
		fontWeight: "bold",
	},
	paymentEtc: {
		color: "#0003",
		fontSize: h("1.8%"),
		alignSelf: "center",
	},
});

export default Cart;
