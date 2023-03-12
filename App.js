import React from 'react';
import { MainContainer } from './src/navigation/MainContainer';
import Login from './src/navigation/screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="App" component={MainContainer} />

    </Stack.Navigator>

        </NavigationContainer>
  );
};

export default App;
