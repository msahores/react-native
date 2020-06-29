import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, onCancel, visible }) => {
	const [enteredText, setEnteredText] = useState();

	const changeTextHandler = text => {
		setEnteredText(text);
	};

	const onAdd = () => {
		if (!enteredText.length) return;
		setEnteredText("");
		addGoalHandler(enteredText);
	};

	const onCancelHandler = () => {
		onCancel();
		setEnteredText("");
	};

	return (
		<Modal animationType="slide" visible={visible}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={changeTextHandler}
					value={enteredText}
				/>
				<View style={styles.buttonsContainer}>
					<Button title="ADD" onPress={onAdd} style={styles.btn} />
					<Button
						title="CANCEL"
						onPress={onCancelHandler}
						style={styles.btn}
						color="red"
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		width: "80%"
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "60%"
	},
	input: {
		width: 200,
		borderColor: "grey",
		borderWidth: 1,
		padding: 10,
		marginBottom: 10
	}
});

export default GoalInput;
