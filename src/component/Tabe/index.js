import React from 'react';

import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


export default function Tabs() {
    return (
        <View style={styles.container}>

            <AntDesign name="heart" size={25} color="blue"  />
            <Entypo name="plus" size={35} color="blue" />
            <Entypo name="user" size={30} color="blue" />
            <EvilIcons name="calendar" size={40} color="blue" />

        </View>



    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 50,
        paddingHorizontal: 15,
        borderTopWidth:1,
        borderColor: '#FFF',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
});