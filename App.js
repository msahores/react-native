import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList
} from "react-native";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
	const [goals, setGoals] = useState([]);

	const addGoalHandler = enteredGoal => {
		setGoals([
			...goals,
			{
				key: Math.random().toString(),
				value: enteredGoal
			}
    ]);
  };
  
  const deleteItem = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.key !== id))
  }

	return (
		<View style={styles.root}>
      <GoalInput addGoalHandler={addGoalHandler} />
			<FlatList
				data={goals}
				renderItem={itemData => <GoalItem value={itemData.item.value} removeItem={() => deleteItem(itemData.item.key)} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		padding: 50
	},
});

export default App;
