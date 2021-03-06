import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const GoalItem = ({value, removeItem}) => (
  <TouchableOpacity onPress={removeItem}>
    <View style={styles.listItem}>
      <Text>{value}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		borderWidth: 1,
		backgroundColor: "#CCC"
	}
});

export default GoalItem;