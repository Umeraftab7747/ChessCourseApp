import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { WebView } from "react-native-webview";
const PaymentMethod = () => {
	const [modalshow, setmodalshow] = useState(false);
	const [paymentStatus, setpaymentStatus] = useState("");
	const toggleModal = () => {
		setmodalshow(!modalshow);
	};
	const responcehandle = (data) => {
		if (data.title === "success") {
			setpaymentStatus("Complete");
			toggleModal();
		} else if (data.title === "cancel") {
			setpaymentStatus("Cancelled");
			toggleModal();
		}
	};
	return (
		<View style={{ marginTop: 100 }}>
			<Modal visible={modalshow} onRequestClose={toggleModal}>
				<WebView
					source={{ uri: "https://paypalbackend.herokuapp.com" }}
					onNavigationStateChange={(data) => responcehandle(data)}
					injectedJavaScript={`document.getElementById("price").value="123"; document.getElementsByName("price").value="124";`}
				/>
			</Modal>
			<TouchableOpacity
				style={{ width: 300, height: 100 }}
				onPress={toggleModal}>
				<Text>Pay with Paypal</Text>
			</TouchableOpacity>
			<Text>Payment Status: {paymentStatus}</Text>
		</View>
	);
};

export default PaymentMethod;

const styles = StyleSheet.create({});
