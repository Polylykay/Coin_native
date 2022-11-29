import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import WalletHomeScreen from './screens/wallet';
import ProfileScreen from './screens/profile';
import RatinScreen from './screens/rating';
import ShopScreen from './screens/shop';

const walletName = 'Wallet';
const profileName = 'Profile';
const ratingName = 'Rating';
const shopName = 'Shop';

const Tab = createBottomTabNavigator();

export function MainContainer() {
    return (
        <NavigationContainer>
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
                            iconName = focused ? 'cart' : 'cart-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'indigo',
                    labelStyle: { fontSize: 10 },
                    style: { padding: 10, height: 70}
                }}
                >

                <Tab.Screen name={walletName} component={WalletHomeScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />
                <Tab.Screen name={ratingName} component={RatinScreen} />
                <Tab.Screen name={shopName} component={ShopScreen} />


            </Tab.Navigator>
        </NavigationContainer>
    );
};