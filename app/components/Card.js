import React from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText'

import colors from '../config/colors'

function Card({title, subTitle, imageUrl, onPress}) {

    return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }

})

export default Card;