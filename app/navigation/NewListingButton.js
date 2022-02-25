import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

function NewListingButton({ onPress }) {
   return (
       <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={defaultStyles.colors.white} size={40}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        bottom: 25,
        borderColor: defaultStyles.colors.white,
        borderRadius: 40,
        borderWidth: 10,
        height: 80,
        justifyContent: 'center',
        width: 80,
    }
})
export default NewListingButton;