// import  React, {useState} from 'react';
// import {  View, StyleSheet,  Image  } from 'react-native';
// import { Card, Text } from '@rneui/themed';

import React,  {useState, useEffect} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import {baseUrl} from '../../baseUrl';
import { Avatar } from "@rneui/base";





export default function ProfileScreen({navigation}) {
  const [user, setUser] = useState(null)

  useEffect(() =>{
    console.log(123);
    nameUser()
  },[])
  const nameUser = () => {
    axios({
        method: 'get',
        url: `${baseUrl}/users/currentUser`,
    }).then((response) => {
        setUser(response.data)
    }).catch((e) => {
        console.error(e?.response?.data);
    });
}
  return (
    // <View style={styles.container}>
    //   <View style={styles.rectangle}>
    //     <Text>name user</Text>
    //   </View>
    //   <View >
    //     <Text>История</Text>
    //   </View>
    // </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card>
          <Text style={styles.paragraph}>
            Профиль
            
          </Text>
          <Avatar
        activeOpacity={0.2}
        avatarStyle={{}}
        containerStyle={{ backgroundColor: "#BDBDBD",  marginLeft:150, }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
       
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size="large"
        source={{ uri: "https://randomuser.me/api/portraits/lego/6.jpg" }}
        title="I"
        titleStyle={{}}
      />
 
          <Text style={styles.paragraph}>
            {user?.username}
          </Text>
          <Text style={styles.paragraph}> Доступно для перевода: {user?.coinsToSend}

            
          </Text>
          <Text style={styles.paragraph}> Кошелёк: {user?.receivedTokens}</Text>

         


     
        </Card>
        
        
      
      </View>
      
    </SafeAreaView>
     
  );
};



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//   },

//   rectangle: {
//     flex: 0.25,
//     backgroundColor: '#BD0EF1',
   
//   },
//});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  
});
