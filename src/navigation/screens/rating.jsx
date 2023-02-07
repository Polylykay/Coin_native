import  React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {baseUrl} from "../../baseUrl";


export default function RatingScreen({navigation}) {
  const [list, setList] = useState([])
  useEffect(() =>{
      getList()
  },[])
  const getList = () => {
      axios({
          method: 'get',
          url: `${baseUrl}/users/top`,
      }).then((response) => {
        setList(response.data)
      }).catch((e) => {
          console.error(e);
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

  return (
      <SafeAreaView style={styles.container}>
    <FlatList
      data={list}
      renderItem={({ item }) => <Text style={styles.item}>{item.username} - {item.receivedTokens}$</Text>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          Топ пользователей
        </Text>
      )}
      
    />
  </SafeAreaView>
    
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
