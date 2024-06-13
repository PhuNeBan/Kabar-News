import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import React from 'react'

const ItemListNewsDemo = (props) => {
    const {dataNe } = props;
    return (
        <View style = {styles.container}>
           <Text>{dataNe.id}</Text>
           <Text>{dataNe.name}</Text>
           <Text>{dataNe.phone}</Text>
           <Text>{dataNe.address}</Text>
           <Image source={{ uri: dataNe.image }}/>
        </View>
    )
}

export default ItemListNewsDemo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    },
    boxContent: {
        marginStart: 8,
        justifyContent: 'space-between'
    },
    imageNews: {
        width: 96,
        height: 96,
    },
    textType: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 20,
        color: '#4E4B66',
    },
    textTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 21.3,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        width: 310
    },
    boxEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxTime: {
        marginStart: 10
    },
    imageLogoNews: {
        width: 22,
        height: 22,
    },
    textName: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#4E4B66',
        marginStart: 5,
    },
    imageClock: {
        width: 16,
        height: 16,
    },
    textTime: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        color: '#4E4B66',
        marginStart: 5,
    },
    imageVector: {
        width: 15,
        height: 2
    },
})