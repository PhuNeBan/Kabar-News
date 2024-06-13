import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Sceen1 = (props) => {
  const {navigation} = props;
  const ClickNe = () =>{
  //Truyền tên Screen muốn chuyển qua vào navigate
  navigation.navigate('Man2');
  }
  return (
    <View>
      <Pressable style = {styles.Pressable} 
      onPress= {ClickNe}>
        <Text>Hi</Text>
        </Pressable>
    </View>
  )
}

export default Sceen1

const styles = StyleSheet.create({
    Pressable: {
        width: 300,
        height: 100,
        borderWidth: 1,
    }
})