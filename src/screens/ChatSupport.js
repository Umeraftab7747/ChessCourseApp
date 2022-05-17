import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	ScrollView,
	FlatList,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MesgSendComp from "../components/MesgSendComp";
import { w, h } from "react-native-responsiveness";
import MyMsg from "../components/MyMsg";
import { useSelector } from "react-redux";
import { db } from "../Database/firebaseConfig";
const ChatSupport = () => {
	const flatlistRef = useRef();
	const [message, setMessage] = useState("");
	const { isAuth } = useSelector((state) => state.auth);
	const { mesg } = useSelector((state) => state.project);
	const filtered =
		mesg.length > 0 &&
		mesg.filter(
			(dat) => dat.senderid === isAuth.userid || dat.sendTo === isAuth.userid
		);
	console.log("filtered", filtered);

	const sendmesg = async () => {
		await db
			.collection("chatSupport")
			.add({
				senderid: isAuth.userid,
				mesg: message,
				sendTo: "admin",
				createdAt: new Date(),
			})
			.then((doc) => {
				console.log("checking", doc.id);
				setMessage("");
			});
	};
	return (
		<SafeAreaView>
			<ImageBackground
				source={{
					uri: "data:image/jpeg;base64,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",
				}}
				style={styles.bgdiv}
				resizeMode='cover'>
				<KeyboardAvoidingView style={styles.msgCont}>
					<View
						style={{
							width: "95%",
							flex: 1,
							marginVertical: 10,
							alignSelf: "center",
						}}>
						<FlatList
							data={filtered}
							keyExtractor={(item) => item.id}
							ref={flatlistRef}
							onContentSizeChange={() => flatlistRef.current.scrollToEnd()}
							renderItem={({ item }) => (
								<MyMsg
									msg={item.mesg}
									isSender={item.senderid === isAuth.userid ? true : false}
								/>
							)}
						/>
					</View>
					<MesgSendComp
						value={message}
						onChange={(text) => setMessage(text)}
						onPressFun={sendmesg}
					/>
				</KeyboardAvoidingView>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default ChatSupport;

const styles = StyleSheet.create({
	bgdiv: {
		width: "100%",
		height: "100%",
	},
	msgCont: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.1)",
	},
});
