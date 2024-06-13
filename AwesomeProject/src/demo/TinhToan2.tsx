import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TinhToan2 = () => {
  return (
    <View>
      <Text style = {styles.textNe}>TinhToan2</Text>
    </View>
  )
}

export default TinhToan2

const styles = StyleSheet.create({
    textNe: {
        color : 'red',
        fontSize: 30,
        textAlign: 'center'
    }
})