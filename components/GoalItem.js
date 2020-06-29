import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const GoalItem = ({value}) => (
    <View style={styles.listItem}>
      <Text>{value}</Text>
    </View>
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