import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import Card from '../components/Card';

import listingsApi from '../api/listings'

import colors from '../config/colors'
import routes from '../navigation/routes'
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {

    const { data:listings, error, loading, request:loadListings } = useApi(listingsApi.getListings)

    useEffect(()=>{

        loadListings()

    }, [])
    

    return (
       <>
       <ActivityIndicator visible={loading}/>
       <AppScreen style={styles.screen}>
           { 
            error && <>
                <AppText>Couldn't retrieve the listings</AppText>
                <AppButton title="Retry" onPress={loadListings}/>
            </>
           }

           <FlatList 
              data={listings}
              keyExtractor={(listItem)=> listItem.id.toString()}
              renderItem={ ({item})=> 
                <Card 
                   title={item.title} 
                   subTitle={"$"+ item.price} 
                   imageUrl={item.images[0].url} 
                   thumbnailUrl={item.images[0].thumbnailUrl}
                   onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}/> }
              showsVerticalScrollIndicator={false} 
                    />
       </AppScreen>
       </>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor: colors.light
    }
})
export default ListingsScreen;