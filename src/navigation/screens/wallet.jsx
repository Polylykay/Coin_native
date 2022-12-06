import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';


export default function WalletHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26 }}> Доступно монет: 10</Text>
      <Text onPress={() => alert('This is "Wallet" screen')} style={{ fontSize: 26 }}>Home Screen</Text>
      <Ionicons
        name="card-outline"
        color="#000"
        size={40}
      />
      <Text>100</Text>
      <CustomButton title="тык" />
    </View>
  );
};