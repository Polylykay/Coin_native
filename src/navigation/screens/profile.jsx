import  React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text>name user</Text>
      </View>
      <View >
        <Text>История</Text>
      </View>
    </View>
   
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  rectangle: {
    flex: 0.25,
    backgroundColor: '#BD0EF1',
   
  },
});