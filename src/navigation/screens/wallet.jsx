import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import InputTextComment from '../../components/InputTextComment';
import InputUserName from '../../components/InputUserName';
import axios from 'axios';
import SimpleInput from "../../components/SimpleInput";
import {baseUrl} from "../../baseUrl";


export default function WalletHomeScreen({ navigation }) {
  const [user, setUser] = useState(null)
    const [coinsAmount, onChangeAmount] = React.useState('');
    const [receiverId, onChangeReceiver] = React.useState('');
    const [reason, onChangeReason] = React.useState('');

    useEffect(() =>{
        updateUser()
    },[])
    const updateUser = () => {
        axios({
            method: 'get',
            url: `${baseUrl}/users/currentUser`,
        }).then((response) => {
            setUser(response.data)
        }).catch((e) => {
            console.error(e);
        });
    }

    const sendTransaction = () => {
        axios.post(`${baseUrl}/transaction`,
            {coinsAmount ,receiverId, reason},
            {headers:{'Content-Type': 'application/json'}}
        ).then((response) => {
            updateUser()
        }).catch((e) => {
            console.error(e);
        });
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26 }}> Доступно монет: {user?.coinsToSend}
      </Text>
      <SimpleInput value={coinsAmount} setValue={onChangeAmount} placeholder={"Введите сумму для перевода"} />
      <SimpleInput value={receiverId} setValue={onChangeReceiver} placeholder={"Введите айди получателя"} />
      <SimpleInput value={reason} setValue={onChangeReason} placeholder={"Введите причину перевода"} />
      <CustomButton title="Отправить" onPress={sendTransaction} />

      <Ionicons
        name="card-outline"
        color="#000"
        size={40}
      />
      <Text style={{ fontSize: 26 }}> {user?.receivedTokens}</Text>
    </View>
  );
};

//      <Text onPress={() => alert('This is "Wallet" screen')} style={{ fontSize: 26 }}>Home Screen</Text>
