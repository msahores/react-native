import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = ({addGoalHandler}) => {
  const [enteredText, setEnteredText] = useState();

  const changeTextHandler = text => {
    setEnteredText(text)
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={changeTextHandler}
        defaultValue={enteredText}
      />
      <Button title="ADD" onPress={addGoalHandler.bind(this, enteredText)} style={styles.btn} />
    </View>
  )}

const styles = StyleSheet.create({
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
})

export default GoalInput;