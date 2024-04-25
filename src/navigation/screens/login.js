import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { Input, Icon } from '@rneui/themed';
import axios from 'axios';
import {baseUrl} from "../../baseUrl";

// const Form = t.form.Form;

// const User = t.struct({
//   username: t.String,
//   password: t.String,
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 10
//     },
//   },
//   controlLabel: {
//     normal: {
//       color: '#BD0EF1',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }

// const options = {
//   fields: {
//     username: {
//       error: '?'
//     },
//     password: {
//       error: '?'
//     },
//   },
//   stylesheet: formStyles,
// };




export default function Login({ navigation }) {
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

    <View style={styles.container} > 
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
        jus
      />
      
   
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  
});




