import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import InputTextComment from '../../components/InputTextComment';
import InputUserName from '../../components/InputUserName';
import InputTransferMoney from '../../components/InputTransferMoney';


export default function WalletHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26 }}> Доступно монет: 10</Text>
      <InputTransferMoney />
      <InputUserName />
      <InputTextComment />
      <CustomButton title="Отправить" />

      <Ionicons
        name="card-outline"
        color="#000"
        size={40}
      />
      <Text style={{ fontSize: 26 }}> 100</Text>
    </View>
  );
};

//      <Text onPress={() => alert('This is "Wallet" screen')} style={{ fontSize: 26 }}>Home Screen</Text>
