import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import AxiosIntance from './ultil/AxiosIntance';



const SignUp = (props) => {
    const { navigation } = props;
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");


    const Register = async () => {
        console.log(email, pass);
        if (email == "" || pass == "") {
            ToastAndroid.show('Vui lòng nhập đầy đủ email hoặc mật khẩu', ToastAndroid.SHORT);
        }
        else{
            try {
                const response = await AxiosIntance()
                    .post('users/register',
                        { email: email, password: pass })
                console.log(response);
                if (response.error == false) {
                    ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
                    navigation.navigate('Login');
                }
                else {
                    ToastAndroid.show('Đăng ký không thành công', ToastAndroid.SHORT);
                }
    
            } catch (error) {
                console.log("Lỗi Register :" + error);
            }
        }
    }

    const Login = () => {
        //Truyền tên Screen muốn chuyển qua vào navigate
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textHello, { color: '#1877f2' }]}>Hello!</Text>
            <Text style={styles.textWelcome}>Signup to get Started</Text>
            <View style={[styles.boxUser, { marginTop: 65 }]}>
                <Text style={styles.textUser}>Username</Text>
                <Text style={styles.textNote}>*</Text>
            </View>
            <TextInput style={styles.textInput} onChangeText={setemail} />
            <View style={styles.boxUser}>
                <Text style={styles.textUser}>Password</Text>
                <Text style={styles.textNote}>*</Text>
            </View>
            <View style={styles.boxPass}>
                <TextInput style={styles.textInput} onChangeText={setpass} />
                <Image source={require('./Image/Icon_eye.png')} style={styles.imageEye} />
            </View>
            <View style={styles.boxRemember}>
                <CheckBox style={styles.cbRemember}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                    tintColors={{ true: '#1877F2', false: '#1877F2' }} />
                <Text style={styles.textUser}>Remember me</Text>
            </View>
            <Pressable style={styles.pressableLogin} onPress={Register}>
                <Text style={styles.textLogin}>Register</Text>
            </Pressable>
            <View style={styles.textOr}>
                <Text style={[styles.textUser,]}>or continue with</Text>
            </View>
            <View style={styles.boxSocial}>
                <Pressable style={styles.pressableSocial}>
                    <Image source={require('./Image/icon_fb.png')} style={styles.imageSocial} />
                    <Text style={styles.textSocial}>Faceboook</Text>
                </Pressable>
                <Pressable style={styles.pressableSocial}>
                    <Image source={require('./Image/Icon_gg.png')} style={styles.imageSocial} />
                    <Text style={styles.textSocial}>Google</Text>
                </Pressable>
            </View>
            <View style={styles.textOr}>
                <Text style={[styles.textUser,]}>Already have an account ?</Text>
                <Text style={[styles.textUser, { color: '#1877F2' }, { fontWeight: '600' }, { marginStart: 5 }]} onPress={Login}>Login</Text>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 25,
        paddingEnd: 25,
        paddingTop: 24,
        flexDirection: 'column',
        backgroundColor: 'white'
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
        letterSpacing: 0.12
    },
    textUser: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        marginTop: 4,
        borderRadius: 6
    },
    textNote: {
        color: '#C30052'
    },
    boxUser: {
        flexDirection: 'row'
    },
    boxPass: {
        justifyContent: 'center',
    },
    imageEye: {
        position: 'absolute',
        marginStart: 395,
    },
    pressableLogin: {
        height: 50,
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 13,
        gap: 13,
        borderRadius: 6,
        marginTop: 17.5
    },
    textLogin: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF'
    },
    boxRemember: {
        flexDirection: 'row',
        marginTop: 9.5,
        alignItems: 'center',
    },
    textOr: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
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
        gap: 10,
    },
    imageSocial: {
        width: 24,
        height: 24,
        marginEnd: 11.5,
        marginStart: 25.5
    },
    textSocial: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#667080'
    }
})