import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ListNewsDemo = () => {
  return (
    <View>
      <View style = {styles.listNews}>
            <View style = {styles.boxNews}>
                <Image source={require('../asm/Image/News1.png')} style = {styles.imageNews}/>
                <View style = {styles.boxContent}>
                    <Text style = {styles.textType}>Europe</Text>
                    <Text style = {styles.textTitle}>Ukraine's President Zelensky to BBC: Blood money being paid...</Text>
                    <View style ={ styles.boxEnd}>
                        <View style ={ styles.boxEnd}>
                            <View style = {styles.boxEnd}>
                                <Image source={require('..//asm/Image/LogoBTC.png')} style = {styles.imageLogoNews}/>
                                <Text style = {styles.textName}>BBC News</Text>
                            </View>
                            <View style = {[styles.boxTime,styles.boxEnd]}>
                                <Image source={require('..//asm/Image/Clock.png')} style = {styles.imageClock}/>
                                <Text style = {styles.textTime}>14m ago</Text>
                            </View>
                        </View>
                        <Image source={require('..//asm/Image/Vector.png')} style= {styles.imageVector}/> 
                    </View>
                </View>
            </View>
            <View style = {styles.boxNews}>
                <Image source={require('..//asm/Image/News2.png')} style = {styles.imageNews}/>
                <View style = {styles.boxContent}>
                    <Text style = {styles.textType}>Travel</Text>
                    <Text style = {styles.textTitle}>Her train broke down. Her phone died. And then she met her..</Text>
                    <View style ={ styles.boxEnd}>
                        <View style ={ styles.boxEnd}>
                            <View style = {styles.boxEnd}>
                                <Image source={require('..//asm/Image/CNN.png')} style = {styles.imageLogoNews}/>
                                <Text style = {styles.textName}>CNN</Text>
                            </View>
                            <View style = {[styles.boxTime,styles.boxEnd]}>
                                <Image source={require('..//asm/Image/Clock.png')} style = {styles.imageClock}/>
                                <Text style = {styles.textTime}>1h ago</Text>
                            </View>
                        </View>
                        <Image source={require('..//asm/Image/Vector.png')} style= {styles.imageVector}/> 
                    </View>
                </View>
            </View>
            <View style = {styles.boxNews}>
                <Image source={require('..//asm/Image/News3.png')} style = {styles.imageNews}/>
                <View style = {styles.boxContent}>
                    <Text style = {styles.textType}>Europe</Text>
                    <Text style = {styles.textTitle}>Russian warship: Moskva sinks in Black Sea</Text>
                    <View style ={ styles.boxEnd}>
                        <View style ={ styles.boxEnd}>
                            <View style = {styles.boxEnd}>
                                <Image source={require('..//asm/Image/LogoBTC.png')} style = {styles.imageLogoNews}/>
                                <Text style = {styles.textName}>BBC News</Text>
                            </View>
                            <View style = {[styles.boxTime,styles.boxEnd]}>
                                <Image source={require('..//asm/Image/Clock.png')} style = {styles.imageClock}/>
                                <Text style = {styles.textTime}>4h ago</Text>
                            </View>
                        </View>
                        <Image source={require('..//asm/Image/Vector.png')} style= {styles.imageVector}/> 
                    </View>
                </View>
            </View>
            <View style = {styles.boxNews}>
                <Image source={require('..//asm/Image/News4.png')} style = {styles.imageNews}/>
                <View style = {styles.boxContent}>
                    <Text style = {styles.textType}>Money</Text>
                    <Text style = {styles.textTitle}>Wind power produced more electricity than coal and nucle...</Text>
                    <View style ={ styles.boxEnd}>
                        <View style ={ styles.boxEnd}>
                            <View style = {styles.boxEnd}>
                                <Image source={require('..//asm/Image/USToday.png')} style = {styles.imageLogoNews}/>
                                <Text style = {styles.textName}>USA Today</Text>
                            </View>
                            <View style = {[styles.boxTime,styles.boxEnd]}>
                                <Image source={require('..//asm/Image/Clock.png')} style = {styles.imageClock}/>
                                <Text style = {styles.textTime}>4h ago</Text>
                            </View>
                        </View>
                        <Image source={require('..//asm/Image/Vector.png')} style= {styles.imageVector}/> 
                    </View>
                </View>
            </View>
            <View style = {styles.boxNews}>
                <Image source={require('..//asm/Image/News5.png')} style = {styles.imageNews}/>
                <View style = {styles.boxContent}>
                    <Text style = {styles.textType}>Life</Text>
                    <Text style = {styles.textTitle}>'We keep rising to new challenges:' For churches hit by</Text>
                    <View style ={ styles.boxEnd}>
                        <View style ={ styles.boxEnd}>
                            <View style = {styles.boxEnd}>
                                <Image source={require('..//asm/Image/USToday.png')} style = {styles.imageLogoNews}/>
                                <Text style = {styles.textName}>USA Today</Text>
                            </View>
                            <View style = {[styles.boxTime,styles.boxEnd]}>
                                <Image source={require('..//asm/Image/Clock.png')} style = {styles.imageClock}/>
                                <Text style = {styles.textTime}>4h ago</Text>
                            </View>
                        </View>
                        <Image source={require('..//asm/Image/Vector.png')} style= {styles.imageVector}/> 
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ListNewsDemo

const styles = StyleSheet.create({
    listNews: {
        marginEnd: 100,
    },
    boxNews: {
        flexDirection: 'row',
        marginTop: 32,
    },
    boxContent: {
        marginStart: 8,
        justifyContent: 'space-between'
    },
    imageNews: {
        width: 96,
        height: 96,
    },
    textType: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 20,
        color: '#4E4B66',
    },
    textTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 21.3,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        width: 310
    },
    boxEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxTime: {
        marginStart: 10
    },
    imageLogoNews: {
        width: 22,
        height: 22,
    },
    textName: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#4E4B66',
        marginStart: 5,
    },
    imageClock: {
        width: 16,
        height: 16,
    },
    textTime: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        color: '#4E4B66',
        marginStart: 5,
    },
    imageVector: {
        width: 15,
        height: 2
    },
})