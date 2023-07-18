import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"


import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

import navigation from "./rootNavigation";
import useNotifications from '../hooks/useNotifications';



const Tab=  createBottomTabNavigator();

const AppNavigator =() => {
   
      useNotifications();


    return (
    
        <Tab.Navigator
        tabBarOptions={{
            style: { paddingBottom: 10,paddingTop: 5, height: 60}, // Adjust the paddingBottom and paddingTop values
        }}
        >
            <Tab.Screen 
                name="Feed" 
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" color={color} size={size} />
                }}
            />
            <Tab.Screen 
                name="ListingEdit" 
                component={ListingEditScreen}
                options={({navigation, route})=>({
                    tabBarButton: () => <NewListingButton onPress={()=> navigation.navigate("ListingEdit")}/>,
                    tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                })}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountNavigator}
                options={{
                tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    
    );

};

export default AppNavigator;