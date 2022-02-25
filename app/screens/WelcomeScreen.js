import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';

import AppButton from '../components/AppButton'
import colors from '../config/colors'

const WelcomeScreen = ({ navigation}) =>{

    return (
        <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={styles.background} blurRadius={3}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo-red.png')} style={styles.logo} />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton 
                title="Login" 
                onPress={()=> navigation.navigate("Login")}/>
            <AppButton 
                title="Register" 
                color={colors.secondary}
                onPress={()=> navigation.navigate("Register")} />
            
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        top:70,
        position:'absolute',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
      },
      tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
      }
})

export default WelcomeScreen