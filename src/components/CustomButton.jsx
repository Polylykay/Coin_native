import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    container:{
        padding: 15
    },
    button:{
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#BD0EF1',
        justifyContent: 'center',
        alignItems: 'center',
        width: 330, 
        height: 50
    },
    buttonText:{
        color: '#fff'
    }
})
