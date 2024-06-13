import React from 'react'

import { 
    View, 
    Text, 
    StyleSheet,
} from 'react-native'


const Hello = () => {
  return (
    <View>
      <Text style = {styles.myTitle}>Hello FPT Polytechnic</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  myTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
})

export default Hello