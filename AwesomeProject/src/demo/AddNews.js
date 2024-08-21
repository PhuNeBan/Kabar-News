import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from '../asm/ultil/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddNews = () => {

  const [imageUri, setimageUri] = useState("")


  const chupAnh = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    postAnh(result.assets[0].uri);
  }

  const layAnh = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    postAnh(result.assets[0].uri);
  }

  const postAnh = async (uriImage) => {
    const formData = new FormData();
    formData.append('image',{
      uri: uriImage,
      type: 'image/jpeg',
      name: 'image.jpg'
    });
    const response = await AxiosIntance("multipart/form-data").post('media/upload', formData);
    console.log(response.data.path);
    if (response.error == false )
    {
      setimageUri(response.data.path);
      console.log("Thành công");
    }
    else{
      ToastAndroid.show("Thất bại", ToastAndroid.SHORT);
    }

  }

  const postNews = async () => {
    const response = await AxiosIntance().post("articles", {
      ti
    })


    console.log(imageUri)
  }



  return (
    <View>
      <Text>AddNews</Text>
      <Image />
      <Pressable style={styles.pressable} onPress= {chupAnh}>
        <Text>Chup anh</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress= {layAnh}>
        <Text>Lay anh</Text>
      </Pressable>
      <TextInput />
      <TextInput />

    </View>
  )
}

export default AddNews

const styles = StyleSheet.create({
  pressable: {
    borderWidth: 1,
    height: 100,
  }
})