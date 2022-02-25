import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Lamby Yubin',
        description: '"Hey! Is this item still available?"',
        image: require('../assets/images/mosh.jpg')
    },
    {
        id: 2,
        title: 'Lamby Yubin',
        description: "I'm interested in this item. When will you be able to post it?",
        image: require('../assets/images/mosh.jpg')
    },
    {
        id: 3,
        title: 'Lamby Yubin',
        description: "Can I have a discount for this item please?",
        image: require('../assets/images/mosh.jpg')
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <AppScreen style={styles.screen}>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()} 
                renderItem={({item})=> 
                    <ListItem title={item.title} 
                              subTitle={item.description} 
                              image={item.image} 
                              onPress={()=>console.log("Message selected")} 
                              renderRightActions={() => (
                                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                                )} 
                              showChevrons
                              /> } 
                              
                ItemSeparatorComponent={()=> <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={()=> {
                    setMessages([{
                        id: 2,
                        title: 'Lamby Yubin',
                        description: "I'm interested in this item. When will you be able to post it?",
                        image: require('../assets/images/mosh.jpg')
                    }])
                }}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1
    }
})

export default MessagesScreen;