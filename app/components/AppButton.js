import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function AppButton({title, color, onPress}) {

    const styles = StyleSheet.create({
    
        button: {
            backgroundColor: color? color: colors.primary,
            width: '100%',
            height: 45,
            borderRadius:20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
        },
        text: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        }
    })


    return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableOpacity>

    );

    
}



export default AppButton;