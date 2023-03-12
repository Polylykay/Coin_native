import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';
import SimpleInput from "../../components/SimpleInput";
import {baseUrl} from "../../baseUrl";
import { SelectList } from 'react-native-dropdown-select-list'




export default function WalletHomeScreen({ navigation }) {
  const [data,setData] = React.useState([]);

  React.useEffect(() => 
  axios({
    method: 'get',
    url: `${baseUrl}/users`,
  }).then(res => {
    setData(res.data.map((item) => {
      return {key: item.username, value: `${item.name} (${item.username})`}
    }))
  })
,[])
  const [user, setUser] = useState(null)
    const [coinsAmount, onChangeAmount] = React.useState('');
    const [receiverUsername, onChangeReceiver] = React.useState('');
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
            console.log(response.data);
          }).catch((e) => {
            console.error(e?.response?.data);
        });
    }

    const sendTransaction = () => {
      console.log(            {coinsAmount ,receiverUsername, reason}        )
        axios.post(`${baseUrl}/transaction`,
            {coinsAmount ,receiverUsername, reason},
            {headers:{'Content-Type': 'application/json'}}
        ).then((response) => {
            updateUser()
        }).catch((e) => {
            console.error(e?.response?.data);
        });
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 26 }}> Доступно монет: {user?.coinsToSend}
      </Text>
      <SimpleInput value={coinsAmount} setValue={onChangeAmount} placeholder={"Введите сумму для перевода"} />
      <SelectList style={{}}
        setSelected={(val) => onChangeReceiver(val)} 
        data={data} 
        save="key"
        boxStyles={{width:330}}
        placeholder={"Введите айди или имя получателя"}
    />
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
