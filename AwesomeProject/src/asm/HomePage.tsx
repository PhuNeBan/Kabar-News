import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListNews from './ListNews';
import Login from './Login';
import NewDetail from './NewDetail';
import Profile from './Profile';
import SignUp from './SignUp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tab1 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator>
    )
}

const HomePage = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="ListNews" component={ListNews} />
                    <Tab.Screen name="NewsDetail" component={NewDetail} />
                    <Tab.Screen name="Tab1" component={Tab1} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})