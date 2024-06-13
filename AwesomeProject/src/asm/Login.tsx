import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './ultil/AppContext';

const Login = props => {
  const {navigation} = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {setisLogin} = useContext(AppContext);
  const {setinforUser} = useContext(AppContext);

  // const [email, setemail] = useState("long@gmail.com");
  // const [pass, setpass] = useState("1234");

  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const Login = async () => {
    console.log(email, pass);
    if (email == '' || pass == '') {
      ToastAndroid.show(
        'Vui lòng nhập đầy đủ email hoặc mật khẩu',
        ToastAndroid.SHORT,
      );
    } else {
      try {
        const response = await AxiosIntance().post('auth/login', {
          email: email,
          password: pass,
        });

        if (response.error == false) {
          console.log(response.data.user);
          await AsyncStorage.setItem('token', response.data.token);
          ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
          setinforUser(response.data.user);
          setisLogin(true);
        } else {
          // ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
          console.log('ktg');
        }
      } catch (error) {
        console.log('Lỗi Login :' + error);
        ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
        setEmailError(errorLogin());
      }
    }
  };
  const SignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHello}>Hello</Text>
      <Text style={[styles.textHello, {color: '#1877f2'}]}>Again</Text>
      <Text style={styles.textWelcome}>Welcome back you’ve been missed</Text>
      <View style={[styles.boxUser, {marginTop: 48}]}>
        <Text style={styles.textUser}>Username</Text>
        <Text style={styles.textNote}>*</Text>
      </View>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setemail}
      />
      <View style={styles.boxUser}>
        <Text style={styles.textUser}>Password</Text>
        <Text style={styles.textNote}>*</Text>
      </View>
      <View style={styles.boxPass}>
        <TextInput
          style={styles.textInput}
          value={pass}
          onChangeText={setpass}
        />
        <Image
          source={require('./Image/Icon_eye.png')}
          style={styles.imageEye}
        />
      </View>
      <View
        style={[
          styles.boxUser,
          {justifyContent: 'space-between'},
          {marginTop: 9.5},
        ]}>
        <View
          style={[
            styles.boxUser,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <CheckBox
            style={styles.cbRemember}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#1877F2', false: '#1877F2'}}
          />
          <Text style={styles.textUser}>Remember me</Text>
        </View>
        <Text style={[styles.textUser, {color: '#5890FF'}]}>
          Forgot the password?
        </Text>
      </View>
      <Pressable style={styles.pressableLogin} onPress={Login}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <View style={styles.textOr}>
        <Text style={[styles.textUser]}>or continue with</Text>
      </View>
      <View style={styles.boxSocial}>
        <Pressable style={styles.pressableSocial}>
          <Image
            source={require('./Image/icon_fb.png')}
            style={styles.imageSocial}
          />
          <Text style={styles.textSocial}>Faceboook</Text>
        </Pressable>
        <Pressable style={styles.pressableSocial}>
          <Image
            source={require('./Image/Icon_gg.png')}
            style={styles.imageSocial}
          />
          <Text style={styles.textSocial}>Google</Text>
        </Pressable>
      </View>
      <View>
        <View style={styles.textError}>
          <Text style={[styles.textUser]}>don’t have an account ?</Text>
          <Text style={[styles.textUser, styles.textError_1]} onPress={SignUp}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 25,
    paddingEnd: 25,
    paddingTop: 24,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  textHello: {
    fontSize: 48,
    fontFamily: 'Poppins',
    color: '#050505',
    fontWeight: '700',
  },
  textWelcome: {
    width: 222,
    height: 60,
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#4E4B66',
    marginTop: 4,
    lineHeight: 30,
    letterSpacing: 0.12,
  },
  textUser: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  textInput: {
    height: 48,
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 6,
    padding: 10,
  },
  textNote: {
    color: '#C30052',
  },
  boxUser: {
    flexDirection: 'row',
  },
  boxPass: {
    justifyContent: 'center',
  },
  imageEye: {
    position: 'absolute',
    marginStart: 395,
  },
  cbRemember: {
    height: 20,
  },
  pressableLogin: {
    height: 50,
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 6,
    marginTop: 17.5,
  },
  textLogin: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  textOr: {
    marginTop: 16,
    alignItems: 'center',
  },
  boxSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressableSocial: {
    width: 190,
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#EEF1F4',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 12,
    paddingEnd: 24,
    paddingStart: 16,
  },
  imageSocial: {
    width: 24,
    height: 24,
    marginEnd: 11.5,
    marginStart: 25.5,
  },
  textSocial: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#667080',
  },
  textError: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textError_1: {
    marginStart: 5,
    color: '#1877F2',
    fontWeight: '600',
  },
});
