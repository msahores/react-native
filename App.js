import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//2:07

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setGoals([...goals, enteredGoal]);
    setEnteredGoal('');
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
				<Button
				  title='ADD'
	        onPress={addGoalHandler}
		  	  style={styles.btn}
				/>
      </View>
      <View>
        {goals.map((goal, index) => (
								<View key={index}>
												<Text>
																{goal}
												</Text>
								</View>
				))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'
  },
  input: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  },
  btn: {
	  padding: 100,  //TODO: no toma este atributo
  }
});

export default App;
