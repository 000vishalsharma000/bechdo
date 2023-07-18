import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import colors from '../config/colors';

const Stack= createStackNavigator();

const AuthNavigator = () =>(
    <Stack.Navigator 
        // screenOptions={{
        // headerStyle : {backgroundColor:  colors.primary},
        // headerTintColor: "white",
        // }}
    >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
);

export default AuthNavigator;
