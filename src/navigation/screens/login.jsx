import React from 'react';
import { View, StyleSheet, Button,} from 'react-native';
import axios from 'axios';
import t from 'tcomb-form-native';
import {baseUrl} from "../../baseUrl";

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: '#BD0EF1',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    username: {
      error: '?'
    },
    password: {
      error: '?'
    },
  },
  stylesheet: formStyles,
};




export default function Login({ navigation }) {
  let _form = null
  

  const handleSubmit =()=>{
    const value = _form.getValue();
    axios.post(`${baseUrl}/auth/login`,
        {username:value.username,password:value.password},
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

    <View style={styles.container}>
      <Form
        ref={c => _form = c}
        type={User}
        options={options}
      />
      
      <Button
        title="Sign In!"
        onPress={() => {handleSubmit();}}
        color = '#BD0EF1'
        
      />
   
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  
});
