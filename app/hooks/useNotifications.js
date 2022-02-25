import { useEffect } from 'react'
import * as Notifications from 'expo-notifications';
import expoPushTokens from '../api/expoPushTokens'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });


const useNotifications = (notificationListener) => {

    useEffect(() => {
        registerForPushNotifications();

        if(notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener)
    }, [])

    const registerForPushNotifications = async () => {
        try {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Notifications.requestPermissionsAsync();
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
        
            const token = (await Notifications.getExpoPushTokenAsync()).data
            expoPushTokens.register(token)
            
        } catch (error) {
            console.log('Error getting a push token', error)
        }
    }
}

export default useNotifications