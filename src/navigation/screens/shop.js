import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import { Tab, TabView, Text } from '@rneui/themed';
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
  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  const pipeTimeStamp = (t) => {
    return 'Дата: ' + t.replace('T', ', Время: ').split('.')[0]
  }
  return (
    <>
    <Tab containerStyle={{ backgroundColor: 'white' }} indicatorStyle={{ backgroundColor: '#BD0EF1' }} value={index} onChange={setIndex} dense>
      <Tab.Item title="Исходящие" titleStyle={{ fontSize: 20, color: '#BD0EF1' }}/>
      <Tab.Item title="Входящие" titleStyle={{ fontSize: 20, color: '#BD0EF1' }}/>
    </Tab>
    <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
        <SafeAreaView style={styles.container}>
          <FlatList
          data={outcomingTransactions}
          renderItem={({ item }) => <Text style={styles.item}>{item.receiverUsername}({item.reason}) - {item.coinsAmount}$ ____ {pipeTimeStamp(item.timestamp)}</Text>}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={myItemSeparator}
          ListEmptyComponent={myListEmpty}
          ListHeaderComponent={() => (
            <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
              
            </Text>
          )}  
          />
          </SafeAreaView>
        </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
        
        <FlatList 
        data={incomingTransactions}
        renderItem={({ item }) => <Text style={styles.item}>{item.senderUsername}({item.reason}) - {item.coinsAmount}$ ____ {pipeTimeStamp(item.timestamp)}</Text>}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
            
          </Text>
        )}
        />
      </TabView.Item>
      
    </TabView>


    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});