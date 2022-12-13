import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import axios from 'axios';


import t from 'tcomb-form-native';

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


function handleSubmit (){
  const value = this._form.getValue();
  // console.log({password:value.password, username:value.username});
  /*axios({
    method: 'post',
    url: `https://192.168.1.155:3000/auth/login`,
    body: {username:value.username,password:value.password}
  }).then((response) => {
    console.log(response.data );
  });*/

}


export default function Login({ navigation }) {
  const loadScene = () => {
    navigation.navigate('App')
      //fetch('http://192.168.1.155:3000/users').then(res => res.json()).then(res => console.log(res))
      
  }
  return (

    <View style={styles.container}>
      <Form
        ref={c => this._form = c}
        type={User}
        options={options}

      />
      <Button
        title="Sign Up!"
        onPress={() => {handleSubmit(); loadScene();}}
        color = '#BD0EF1'
        
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
