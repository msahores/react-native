import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView
} from "react-native";

const App = () => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [goals, setGoals] = useState([]);

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setGoals([...goals, enteredGoal]);
		//setEnteredGoal("");
	};

	return (
		<View style={styles.root}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} style={styles.btn} />
			</View>
			<ScrollView>
				{goals.map((goal, index) => (
					<View key={index} style={styles.listItem}>
						<Text>{goal}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		padding: 50
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end"
	},
	input: {
		width: 200,
		borderColor: "grey",
		borderWidth: 1,
		padding: 10
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		borderWidth: 1,
		backgroundColor: "#CCC"
	}
});

export default App;
