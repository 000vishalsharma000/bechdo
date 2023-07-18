
import { StyleSheet, Platform, StatusBar} from 'react-native';

import React, { useEffect, useState } from "react";





import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

import {navigationRef} from './app/navigation/rootNavigation'
import * as Notifications from 'expo-notifications';



export default function App() {

  const [user, setUser]= useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user ) setUser(user) ;
    


  }

  useEffect(()=>{
    restoreUser();
  },[]);




  return (
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {user ? <AppNavigator/> :<AuthNavigator/>}
    </NavigationContainer>
    </AuthContext.Provider >



      
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android"?  StatusBar.currentHeight : 20
  },



});


