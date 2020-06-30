import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Header from "./components/Header";

const App = () => {
	const [goals, setGoals] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);

	const addGoalHandler = enteredGoal => {
		setGoals([
			...goals,
			{
				key: Math.random().toString(),
				value: enteredGoal
			}
		]);
		setModalVisible(false);
	};

	const deleteItem = id => {
		setGoals(currentGoals => currentGoals.filter(goal => goal.key !== id));
	};

	return (
		<>
			<Header title="React Native App" />
			<View style={styles.root}>
				<Button
					title="Add New Goal"
					onPress={() => setModalVisible(true)}
					style={styles.btn}
				/>
				<GoalInput
					addGoalHandler={addGoalHandler}
					visible={modalVisible}
					onCancel={() => setModalVisible(false)}
				/>
				<FlatList
					data={goals}
					renderItem={itemData => (
						<GoalItem
							value={itemData.item.value}
							removeItem={() => deleteItem(itemData.item.key)}
						/>
					)}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		padding: 50
	}
});

export default App;
