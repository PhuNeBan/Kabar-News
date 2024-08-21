import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'

const TinhToan = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(1);
    const [result, setresult] = useState(3);
    const [point, setpoint] = useState(0);

    const luaChon = (isChoose) => {
        setnum1(Math.floor(Math.random() * 10));
        setnum2(Math.floor(Math.random() * 10));
        setresult(Math.floor(Math.random() * 10));

        let tong = num1 + num2;
        if((tong == result && isChoose == true) || (tong != result && isChoose == false )){
            // alert('Bạn thật thông minh');
            setpoint(point + 1)
        }else{
            alert('Bạn thật ngu');
            setpoint(0)
        }
    }

    return (
        <View>
            <Text style = {styles.myStyle} > Điểm: {point}</Text>
            <Text style={styles.myTitle}>Bạn giỏi phép cộng</Text>
            <Text style={styles.myStyle}>{num1} + {num2}</Text>
            <Text style ={styles.myStyle}>=</Text>
            <Text style ={styles.myStyle}>{result}</Text>
            <Pressable style={styles.myPressableTrue} onPress= {() => luaChon(true)}>
                <Text style = {styles.myText}>Đúng</Text>
            </Pressable>
            <Pressable style={styles.myPressableFalse} onPress= {() => luaChon(false)}>
                <Text style = {styles.myText}>Sai</Text>
            </Pressable>

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
    myStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    myPressableTrue: {
        borderWidth: 1, 
        textAlign: 'center', 
        padding: 10, 
        marginBottom: 1, 
        fontSize: 20, 
        backgroundColor: 'green'
    },
    myPressableFalse: {
        borderWidth: 1, 
        textAlign: 'center', 
        padding: 10, 
        marginBottom: 1, 
        fontSize: 20, 
        backgroundColor: 'red'
    },
    myText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default TinhToan