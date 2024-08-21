import React , {useState} from 'react'
import { View, Text,Button } from 'react-native'


const Welcome = (props) => {
   const {name,age,address, gioitinh, ten} = props; 
   const [tuoi, setTuoi] = useState('18');
   const clickNow = () => {
    if(tuoi == '18'){
      setTuoi('123');
    }
    else{
      setTuoi('18');
    }
   }

   const clickDungSai = (tt) =>{
    if (tt == true){
      console.log('Hello');
    }else{
      console.log('Bye')
    }
   }

  return (
    <View>
      <Text>{so}</Text>
      <Button title='Click now!!!' onPress={clickNow}></Button>
      <Button title='Click Đúng' onPress={() => clickDungSai(true)}></Button>
      <Button title='Click Sai' onPress={() => clickDungSai(false)}></Button>

    </View>
  )
}



export default Welcome