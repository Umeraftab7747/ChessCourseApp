import { StyleSheet, Text, View, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { w, h } from "react-native-responsiveness";
import { WebView } from "react-native-webview";
import AppCard from "../components/AppCard";
import { useSelector } from "react-redux";
const OwnCources = ({ navigation }) => {
	const { buybooks, books } = useSelector((state) => state.project);
	const [modalVisible, setmodalVisible] = useState(false);
	const [playlistlink, setplaylistlink] = useState("");
	console.log(buybooks.length, books);
	const togleModal = (data) => {
		setmodalVisible(!modalVisible);
		setplaylistlink(data);
	};
	return (
		<>
			<Header text={""} onPress={() => navigation.goBack()} />
			<FlatList
				data={buybooks}
				ListEmptyComponent={
					<View style={styles.emptydiv}>
						<Text style={styles.emptytxt}>keine Daten verfügbar.</Text>
					</View>
				}
				renderItem={({ item }) => {
					const newdata = books && books.find((itm) => itm.id === item.id);
					return (
						<AppCard
							name={newdata.name}
							price={"schaue"}
							imglink={newdata.imglink}
							onPress={() =>
								togleModal(newdata.playList ? newdata.playList : "")
							}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
			<Modal visible={modalVisible} onRequestClose={() => console.log("")}>
				<Header text={""} onPress={() => togleModal("")} />
				<WebView source={{ uri: playlistlink }} />
			</Modal>
			{/* <WebView
				source={{
					uri: "https://vimeo.com/showcase/9575744",
				}}
			/> */}
		</>
	);
};

export default OwnCources;

const styles = StyleSheet.create({
	emptydiv: {
		width: w("100%"),
		height: h("86%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	emptytxt: {
		fontSize: h("3%"),
		color: "grey",
	},
});
