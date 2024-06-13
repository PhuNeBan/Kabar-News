import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './AppContext';
import ListNews from '../ListNews';
import NewDetail from '../NewDetail';
import Login from '../Login';
import SignUp from '../SignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostNew from '../PostNew';
import EditProfile from '../EditProfile';
import DetailScreen from '../DetailScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//login, register  ==> stack
const User = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator >
    );
};

//news,detail,search,profile ==> tab
const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'News') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Signup') {
                        iconName = focused ? 'share-social' : 'share-social-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="News" component={News} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profiles} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const News = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ListNews" component={ListNews} options={{ headerShown: false }} />
            <Stack.Screen name="NewDetail" component={NewDetail} />
        </Stack.Navigator >
    );
}

const Profiles = () => {
    return(
        <Stack.Navigator> 
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CreateNews" component={PostNew}/>
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
        </Stack.Navigator >
    );
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    console.log(isLogin);

    return (
        <>
            {isLogin == false ? <User/> : <Main />}
        </>
    );
}

export default AppNavigator