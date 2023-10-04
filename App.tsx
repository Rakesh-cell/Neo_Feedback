/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';


import Login from './src/screens/Auth/Login';
import { AuthProvider } from './src/screens/AuthProvider';
import Rootnavigation from './src/navigation/Rootnavigation';
function App(): JSX.Element {
  return (
    // <SafeAreaView>
      <AuthProvider>
            <Rootnavigation/>
     </AuthProvider>
    /* </SafeAreaView> */
  )
}



export default App;
