import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import ContactSellerForm from '../components/ContactSellerForm'

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView
            behavior="p"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
             >
            <Image  style={styles.image}
                    source={{uri: listing.images[0].url}} 
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/images/mosh.jpg")}
                        title="Lamby Yubin" 
                        subTitle= "3 Listings"/>
                </View>
             <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title:{
        marginVertical: 10,
        fontSize: 24,
        fontWeight: "500",
    },
    price:{
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    },
    userContainer: {
        marginVertical: 40
    }

    
})
export default ListingDetailsScreen;