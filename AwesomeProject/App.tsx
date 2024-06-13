import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppContextProvider} from './src/asm/ultil/AppContext';
import AppNavigator from './src/asm/ultil/AppNavigator';

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </AppContextProvider>

    // // <Login/>

    //   // <PostNew/>
    // <DetailScreen/>
    // <EditProfile/>
  );
};

export default App;
