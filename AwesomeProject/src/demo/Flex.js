import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text1}></Text>
      <Text style = {styles.text2}></Text>
      <Text style = {styles.text3}></Text>
    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex : 1,
        flexDirection: 'column',
        justifycontent: 'flex-end',
        // alignItems: 'center',
        // flexWrap: 'wrap',
    },
    text1: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    text2: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },
    text3: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    },
})