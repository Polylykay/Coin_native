import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import InputTextComment from '../../components/InputTextComment';
import InputUserName from '../../components/InputUserName';
import InputTransferMoney from '../../components/InputTransferMoney';
import axios from 'axios';


export default function WalletHomeScreen({ navigation }) {
  const [user, setUser] = useState({
    username: 'i21s998',
    coinsToSend: 30,
    receivedCoins: 24,
  })

  useEffect(() =>{
    axios({
      method: 'get',
      url: `http://192.168.1.155:3000/users/3`,
    }).then((response) => {
      console.log(response.data );
      setUser(response.data)
    }).catch((e) => {
      console.log(e);
    });
  },[])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26 }}> Доступно монет: {user?.coinsToSend}
      </Text>
      <InputTransferMoney />
      <InputUserName />
      <InputTextComment />
      <CustomButton title="Отправить" />

      <Ionicons
        name="card-outline"
        color="#000"
        size={40}
      />
      <Text style={{ fontSize: 26 }}> {user?.receivedCoins}</Text>
    </View>
  );
};

//      <Text onPress={() => alert('This is "Wallet" screen')} style={{ fontSize: 26 }}>Home Screen</Text>
