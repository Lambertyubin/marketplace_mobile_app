import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import navigation from './rootNavigation'

import routes from './routes'
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {

   useNotifications((notification)=> navigation.navigate('Account') )

    return(
      <Tab.Navigator>
        <Tab.Screen 
            name="Feed" 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({size, color})=> <MaterialCommunityIcons name="home" color={color} size={size} />
            }} />
        <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen}
            options={({ navigation})=> ({
                tabBarButton: ()=> <NewListingButton onPress={()=> navigation.navigate(routes.LISTING_EDIT)}/>,
                tabBarIcon: ({size, color})=> <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            })} />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator}
            options={{
                tabBarIcon: ({size, color})=> <MaterialCommunityIcons name="account" color={color} size={size} />
            }} />
      </Tab.Navigator>
)}

export default AppNavigator;