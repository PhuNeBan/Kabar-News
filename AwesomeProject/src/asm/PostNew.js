import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const PostNew = (props) => {
  const { navigation } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const chupAnh = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);

    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg'});

    const response = await AxiosIntance("multipart/form-data").post('media/upload', formData);
    console.log(response.data.path);
    if (response.error == false) {
      setImage(response.data.path);
      console.log("Thành công");
      console.log("hello: " + image);
    }
    else {
      ToastAndroid.show("Thử lại", ToastAndroid.SHORT);
    }
  }

  const layAnh = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.png'
    });
    const response = await AxiosIntance('multipart/form-data').post('media/upload', formData);
    console.log("link :" + response.data.path);
    if (response.error == false) {
      setImage(response.data.path);
      console.log("Thành công");
      console.log("hello: " + image);
    }
    else {
      ToastAndroid.show("Thử lại", ToastAndroid.SHORT);
    }
  }

  const postNews = async () => {
    // setchangeImage(changeImg_have);
    console.log(title + " " + content + " " + image);

    if(title !="" & content !="" & image !=""){
      const response = await AxiosIntance().post("articles", {title: title, content: content, image: image});
      if (response.error == false) {
        console.log("Thành công");
        setImage("");
        setContent("");
        setTitle("");
        navigation.navigate('DetailScreen');
      }
      else{
        ToastAndroid.show("Thử lại", ToastAndroid.SHORT);
      }
    }
    else{
      ToastAndroid.show("Vui lòng nhập đầy đủ thông tin", ToastAndroid.SHORT);
    } 
    
  }

  const alertChoose = () => {
    Alert.alert(
      'Thông báo',
      'Bạn muốn thêm mới?',
      [
        {
          text: 'Lấy ảnh',
          onPress: layAnh,
          style: 'cancel',
        },
        {
          text: 'Chụp ảnh',
          onPress: chupAnh,
        },
      ],
      { cancelable: false },)
  }

  return (
    <View style={styles.container}>
      {
        image == "" ?
          <TouchableOpacity style={styles.importImg} onPress={alertChoose} >
            <Image source={require('./Image/ImportImg.png')} style={styles.imgImport} />
          </TouchableOpacity>
          :
          <Image source={{ uri: image }} style={styles.imgImport} />
      }

      <View>
        <TextInput placeholder={'News Title'} style={styles.textInputTitile} multiline onChangeText={setTitle} value= {title}/>
        <TextInput placeholder={'Add News/Article'} style={styles.textInputContent} multiline onChangeText={setContent} value = {content} />
      </View>
      <View style={styles.boxFooter}>
        <View style={styles.boxFooter_1}>
          <TouchableOpacity style={styles.buttonStyleText} >
            <Image source={require('./Image/B.png')} style={styles.imgStyleText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyleText} >
            <Image source={require('./Image/I.png')} style={styles.imgStyleText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyleText} >
            <Image source={require('./Image/Vector_123.png')} style={styles.imgStyleText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyleText} >
            <Image source={require('./Image/Vector_3cham.png')} style={styles.imgStyleText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyleText} >
            <Image source={require('./Image/Vector_HyberLink.png')} style={styles.imgStyleText} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxFooter_2}>
          <Image source={require('./Image/ImageFooterPostNews.png')} style={styles.imgFooter} />
          <TouchableOpacity style={styles.buttonPublish} onPress={postNews}>
            <Text style={styles.textbuttonPublish} >
              Publish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PostNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 10,
  },
  importImg: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  imgImport: {
    height: 200,
    resizeMode: 'contain',
  },
  textInputTitile: {
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontFamily: 'Poppins',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#050505',
    lineHeight: 36,
    letterSpacing: 0.12,
  },
  textInputContent: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4E4B66',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  boxFooter: {
    width: '110%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  boxFooter_1: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    marginStart: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  boxFooter_2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 20,
    backgroundColor: 'white',
  },
  buttonStyleText: {
    width: '20%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgFooter: {
    width: 180,
    height: 20
  },
  buttonPublish: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  textbuttonPublish: {
    fontFamily: 'Poppins',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'white',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
})