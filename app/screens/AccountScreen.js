import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem'
import AppScreen from '../components/AppScreen'

import colors from '../config/colors'
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator'
import routes from '../navigation/routes'
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: null
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }

]

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth()

    return (
       <AppScreen style={styles.screen}>
           <View style={styles.container} >
            <ListItem 
                    title={user.name} 
                    subTitle={user.email} 
                    image={require("../assets/images/mosh.jpg")} />
           </View>
           <View style={styles.container} >
               <FlatList 
                   data={menuItems} 
                   keyExtractor={(menuItem)=> menuItem.title}
                   ItemSeparatorComponent={ListItemSeparator}
                   renderItem={({item})=> 
                      <ListItem 
                            title={item.title} 
                            IconComponent={<Icon name={item.icon.name} 
                            backgroundColor={item.icon.backgroundColor}/>} 
                            onPress={()=> navigation.navigate(item.targetScreen) } />  } />
           </View>
           <ListItem 
              title="Log Out"
              IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
              onPress={()=> logOut()}  
            />
       </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen:{
        backgroundColor: colors.light
    }
})
export default AccountScreen;