import  React from 'react';
import { Text, View } from 'react-native';

export default function RatingScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() =>  navigation.navigate('Walet')} style={{fontSize: 26}}>Rating Screen</Text>
    </View>
  );
};