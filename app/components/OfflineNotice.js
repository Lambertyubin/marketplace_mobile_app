import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';
import defaultStyles from '../config/styles'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

function OfflineNotice(props) {

    const netInfo = useNetInfo()
    if(netInfo.type!=="unknown" && netInfo.isInternetReachable === false)
        return (
        <View style={styles.container}>
            <AppText style={styles.text}>No internet connection</AppText>
        </View>
        );

    return null
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        height: 50,
        justifyContent: 'center',
        position: "absolute",
        top: Constants.statusBarHeight,
        width: '100%',
        elevation: 1
    },
    text:{
        color: defaultStyles.colors.white
    }
})
export default OfflineNotice;