import React, {useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import { Tab, TabView, Text,ListItem, Card } from '@rneui/themed';
import axios from 'axios';
import {baseUrl} from '../../baseUrl';

export default function ShopScreen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [user, setUser] = useState(null)
  const [outcomingTransactions, setOutcomingTransactions] = useState([])
  const [incomingTransactions, setIncomingTransactions] = useState([])

  useEffect(() =>{
    getUser();
  },[])
  const getUser = () => {
    axios({
        method: 'get',
        url: `${baseUrl}/users/currentUser`,
    }).then((response) => {
        setUser(response.data)
        getTransactions(response.data.username);
    }).catch((e) => {
      console.log(e)
        console.error(e?.response?.data);
    });
}
  const getTransactions = (username) => {
    console.log(username)
    axios({
      method: 'get',
      url: `${baseUrl}/transaction`,
      params: {
        senderUsername: username,
      }
    }).then((response) => {
      setOutcomingTransactions(response.data)
      console.log(response.data)
    }).catch((e) => {
        console.error(e?.response?.data);
    });
    axios({
      method: 'get',
      url: `${baseUrl}/transaction`,
      params: {
        receiverUsername: username,
      }
    }).then((response) => {
      setIncomingTransactions(response.data)
      console.log(response.data)
    }).catch((e) => {
        console.error(e?.response?.data);
    });
  }
  return (
    <>
    <Tab containerStyle={{ backgroundColor: 'white' }} indicatorStyle={{ backgroundColor: '#BD0EF1' }} value={index} onChange={setIndex} dense>
      <Tab.Item title="Входящие" titleStyle={{ fontSize: 20, color: '#BD0EF1' }}/>
      
      <Tab.Item title="Исходящие" titleStyle={{ fontSize: 20, color: '#BD0EF1' }}/>
    </Tab>
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
     
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
       <View style={styles.container}><Text>имя</Text>
       <Text>монеты</Text>
       </View>
      </TabView.Item>
      
    </TabView>


    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    flexDirection: 'row',
    // marginLeft: 90,
    // marginRight: 40,
    // padding: 20,

  },
  
});