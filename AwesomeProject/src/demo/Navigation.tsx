import {
    Button,
    SafeAreaView,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
  import Login from './src/asm/Login';
  import SignUp from './src/asm/SignUp';
  import ListNews from './src/asm/ListNews';
  import NewDetail from './src/asm/NewDetail';
  import Man2 from './src/demo/Man2';
  import Profile from './src/asm/Profile';
  import FlatListNews from './src/demo/FlatListNews';
  import Sceen1 from './src/demo/Sceen1';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { Screen } from 'react-native-screens';
  import HomePage from './src/asm/HomePage';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const Navigation = () => {
  
    return (
      //Navigation Stack
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName='Login'>
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Signup" component={SignUp} />
      //     <Stack.Screen name="Profile" component={Profile} />
      //   </Stack.Navigator>
      // </NavigationContainer>
  
      //Navigation Tab
      // <NavigationContainer>
      //   <Tab.Navigator
      //     screenOptions={({ route }) => ({
      //       tabBarIcon: ({ focused, color, size }) => {
      //         let iconName;
      //         if (route.name === 'Screen1') {
      //           iconName = focused
      //             ? 'beer-sharp'
      //             : 'analytics';
      //         } else if (route.name === 'Screen2') {
      //           iconName = focused ? 'beer-sharp' : 'analytics';
      //         }
      //         return <Ionicons name={iconName} size={size} color={color} />;
      //       },
      //       tabBarActiveTintColor: 'blue',
      //       tabBarInactiveTintColor: 'gray',
      //     })}
      //   >
      //     <Tab.Screen name="Screen1" component={Sceen1} />
      //     <Tab.Screen name="Man2" component={Man2} />
      //   </Tab.Navigator>
      // </NavigationContainer>
  
      <HomePage/>
  
    );
  };
  
  export default Navigation;