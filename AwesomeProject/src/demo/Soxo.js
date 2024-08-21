import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Soxo = () => {
  const [num1, setnum1] = useState(0);
  const [numberChoose, setnumberChoose] = useState();
  const [thongBao, setthongBao] = useState();
  handNumberChoose = (text) => {
    setnumberChoose(text);
    setthongBao()
  }

  const ketqua = () => {
    setnum1(Math.floor(Math.random() * 100));
    if (numberChoose != undefined) {
      if (numberChoose == num1) {
        thongbao(true);
        setnumberChoose()
      }
      else {
        thongbao(false)
        setnumberChoose()
      }
      // alert(num1)
    }else{
      alert("Bạn phải nhập số");
    }
    
  }

  const thongbao = (kq) => {
    if (kq == true) {
      setthongBao('Chúc mừng bạn đã đoán đúng')
      setnumberChoose()
    }
    else {
      setthongBao('Bạn đã đoán sai')
      setnumberChoose()
    }
  }
  return (
    <View>
      <Text style={styles.myTitle}>Sổ số</Text>
      <Text style={styles.myText}>Nhập số của bạn ( từ 0 đến 99): </Text>

      <Text style = {styles.myTextKetqua}>{thongBao}</Text>

      <TextInput style={styles.myTextInput}
        placeholder="Type here to translate!"
        maxLength={2}
        value = {numberChoose}
        onChangeText={handNumberChoose} />
      <Pressable
        style={styles.myPressableKetqua}
        onPress={ketqua}>
        <Text style={styles.myText2}>Kết quả</Text>
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
  myTextInput: {
    marginHorizontal: 100,
    borderWidth: 1,
    height: 40,
    width: 300,
    borderColor: 'black',
    textAlign: 'center',
  },
  myText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  myText2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  myPressableKetqua: {
    marginTop : 30,
    marginHorizontal: 200,
    borderWidth: 1, 
    width : 100,
    textAlign: 'center', 
    padding: 10, 
    marginBottom: 1, 
    fontSize: 20, 
    backgroundColor: 'blue'
  },
  myTextKetqua : {
    margin: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  }
})
export default Soxo