import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Course Goal" style={{width: 200, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 10}} />
        <Button title='ADD' />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   backgroundColor: 'red',
   height: '100'
 } 
});

export default App;