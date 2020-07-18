import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Movies from '../screens/Movies';
import Payment from '../screens/Payment';
import Check from '../screens/Check';
// import Vehicle from '../screens/ProfileTabs/Vehicle';

const Stack = createStackNavigator();

export default function Mystack() {
    return (
        <Stack.Navigator initialRouteName="Movies">
            <Stack.Screen name="Movies" component={Movies}/>
            <Stack.Screen name="Check" component={Check} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator> 
    )
}