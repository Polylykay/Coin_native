import React, { useState } from 'react';
import {baseUrl} from '../baseUrl';
import { View, Button} from 'react-native';
import { Input, Icon } from '@rneui/themed';
import axios from 'axios';


const  FormWallet = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit =()=>{
    axios.post(`${baseUrl}/auth/login`,
        {username, password},
        {headers:{'Content-Type': 'application/json'}}
    ).then(async (response) => {
      const token = response.data.access_token
     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // await SecureStore.setItemAsync('secure_token',token);
      await navigation.navigate('App') 
    }).catch((e) => {
      console.error(e)
    });
  }
 

  return (
    <View>
     <Input
      placeholder='Username'
      onChangeText={value => setUsername(value )
     }

    />
    <Input placeholder="Password"
     secureTextEntry={true} 
     onChangeText={value => setPassword( value )
    }
     />
   <Button
        title="Sign In!"
        onPress={() => {handleSubmit();}}
        color = '#BD0EF1'
        
      />
     </View>
  );
 
};

export default  FormWallet;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: '#ffffff',
//     maxHeight: 500
//   },
// });
