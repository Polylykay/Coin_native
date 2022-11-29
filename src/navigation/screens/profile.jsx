import  React from 'react';
import { Text, View } from 'react-native';

export default function ProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('Wallet')} style={{fontSize: 26}}>Profile Screen</Text>
    </View>
  );
};