import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

import expoPushTokenApi from '../api/expoPushToken';


export default useNotifications =(notificationListner) => {
    useEffect(()=> {
        registerForPushNotifications();

        if (notificationListner) Notifications.addNotificationReceivedListener(notificationListner);
        
    }, []);


    const registerForPushNotifications = async () => {
        try {
          const { status } = await Notifications.getPermissionsAsync();
          if (status !== 'granted') return;
      
          const token = await Notifications.getExpoPushTokenAsync();
          expoPushTokenApi.register(token);
          console.log(token)

        } catch (error) {
          console.log("error getting a push token ", error);
        }
      };
}