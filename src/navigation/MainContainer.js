import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import WalletHomeScreen from './screens/wallet';
import ProfileScreen from './screens/profile';
import RatinScreen from './screens/rating';
import ShopScreen from './screens/shop';

const walletName = 'Кошелёк';
const profileName = 'Профиль';
const ratingName = 'Топ';
const shopName = 'История';

const Tab = createBottomTabNavigator();

export function MainContainer() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={walletName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        
                        if (rn === walletName) {
                            iconName = focused ? 'cash' : 'cash-outline'
                        } else if (rn === profileName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === ratingName) {
                            iconName = focused ? 'analytics' : 'analytics-outline'
                        } else if (rn === shopName) {
                            iconName = focused ? 'card' : 'card-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}


                tabBarOptions={{
                    activeTintColor: '#BD0EF1',
                    labelStyle: { fontSize: 10 },
                    style: { padding: 10, height: 70},
                    "tabBarActiveTintColor": "#BD0EF1",
                    "tabBarLabelStyle": {
                      "fontSize": 10
                    },
                    "tabBarStyle": [
                      {
                        "display": "flex"
                      },
                      null
                    ]
                   
                }}
               
                >

                <Tab.Screen name={walletName} component={WalletHomeScreen} options={{headerShown: false }} />
                <Tab.Screen name={profileName} component={ProfileScreen} options={{headerShown: false }} />
                <Tab.Screen name={ratingName} component={RatinScreen} options={{headerShown: false }} />
                <Tab.Screen name={shopName} component={ShopScreen} options={{headerShown: false }} />


            </Tab.Navigator>
        </NavigationContainer>
    );
};

