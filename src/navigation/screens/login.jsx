import React, { Component, useState } from 'react';
import { Text, View } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Earnings(){

    const [username, setUsername] = useState( initialState)
    const [password, setPassword] = useState( initialState)

    const storeToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
        } catch (e) {
          console.log('cant save token')
        }
      }

    return (
        <View>
        <Text>Login</Text>
        </View>
    )
}

