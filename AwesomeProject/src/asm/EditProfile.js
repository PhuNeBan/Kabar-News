import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from './ultil/AppContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance';

const EditProfile = (props) => {
  const { navigation  } = props;
  const { inforUser, setinforUser } = useContext(AppContext);

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
    // if (response.error == false) {
    setinforUser({ ...inforUser, avatar: response.data.path });
    // }
    // else {
    //   ToastAndroid.show("Thử lại", ToastAndroid.SHORT);
    // }
  }

  const exitEdit = () => {
    navigation.navigate("DetailScreen");
  };

  const updateProfile = async () => {
    const response = await AxiosIntance().post("users/update-profile",
      {
        name: inforUser.name,
        address: inforUser.address,
        email: inforUser.email,
        avatar: inforUser.avatar,
        phone: inforUser.phone
      });
    if (response.error == false) {
      console.log(response)
      ToastAndroid.show("Cập nhật thành công, Vui lòng đăng nhập lại", ToastAndroid.SHORT);
      navigation.navigate("DetailScreen");
    }
    else {
      ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
    }
  };

  console.log(inforUser);
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={exitEdit}>
          <Image source={require("./Image/VectorX.png")} style={styles.imgButtonTabBar}/>
        </TouchableOpacity>
        <Text style={styles.textTabBar}>Edit Profile</Text>
        <TouchableOpacity onPress={updateProfile}>
          <Image source={require("./Image/VectorTich.png")} style={styles.imgButtonTabBar_1}/>
        </TouchableOpacity>
      </View>
      <View style={styles.boxImage}>
        {
          inforUser.avatar == "" || inforUser.avatar == null ?
            <Image source={require('./Image/ImageProfile.png')} style={styles.imageProfile} />
            :
            <Image source={{ uri: inforUser.avatar }} style={styles.imageProfile} />
        }
        <View style={styles.boxFrame}>
          <TouchableOpacity onPress={layAnh}>
            <Image source={require('./Image/ImageFrame.png')} style={styles.imageFrame} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textInput} placeholder="User name" value={inforUser.name} onChangeText={(text) => setinforUser({ ...inforUser, name: text })} />
      <Text style={styles.text}>Address</Text>
      <TextInput style={styles.textInput} placeholder="Address" value={inforUser.address} onChangeText={(text) => setinforUser({ ...inforUser, address: text })} />
      <View style={styles.boxProfile}>
        <Text style={styles.text}>Email Address</Text>
        <Text style={styles.textNote}>*</Text>
      </View>
      <TextInput style={styles.textInput} placeholder="Email Address" value={inforUser.email} onChangeText={(text) => setinforUser({ ...inforUser, email: text })} />
      <View style={styles.boxProfile}>
        <Text style={styles.text}>Phone Number</Text>
        <Text style={styles.textNote}>*</Text>
      </View>
      <TextInput style={styles.textInput} placeholder="Phone Number" value={inforUser.phone} onChangeText={(text) => setinforUser({ ...inforUser, phone: text })} />
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginStart: 25,
    // marginEnd: 25,
    padding: 25,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  imgButtonTabBar: {
    width: 20,
    height: 20
  },
  imgButtonTabBar_1: {
    width: 26,
    height: 20
  },
  textTabBar: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '400',
  },
  boxImage: {
    alignItems: 'center',
    marginTop: 10,
  },
  imageProfile: {
    width: 140,
    height: 140,
    borderRadius: 90
  },
  boxFrame: {
    position: 'absolute',
  },
  imageFrame: {
    width: 30,
    height: 30,
    marginStart: 80,
    marginTop: 110,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginTop: 16,
    marginBottom: 4
  },
  textInput: {
    height: 48,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
  },
  textNote: {
    color: '#C30052',
    marginTop: 16,
    marginBottom: 4
  },
  footer: {
    marginTop: 100,
  },
  boxProfile: {
    flexDirection: 'row'
  },
})