import  React from 'react';
import { Text, View } from 'react-native';

export default function WalletHomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => alert('This is "Wallet" screen')} style={{fontSize: 26}}>Home Screen</Text>
    </View>
  );
};