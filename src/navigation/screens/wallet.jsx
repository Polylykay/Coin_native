import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import UselessTextInputMultiline from '../../components/InputTextComment';

export default function WalletHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26 }}> Доступно монет: 10</Text>
      <Text onPress={() => alert('This is "Wallet" screen')} style={{ fontSize: 26 }}>Home Screen</Text>
      <UselessTextInputMultiline />
      <CustomButton title="Отправить" />

      <Ionicons
        name="card-outline"
        color="#000"
        size={40}
      />
      <Text>100</Text>
    </View>
  );
};