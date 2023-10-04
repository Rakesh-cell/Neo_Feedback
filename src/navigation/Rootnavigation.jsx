import { StyleSheet, Text, View } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Auth/Login';
import Register  from '../screens/Auth/Register';
import Home  from '../screens/Home';
import { AuthContext } from '../screens/AuthProvider';
import auth from '@react-native-firebase/auth';
import TabNavigation from './TabNavigation';
import { getHeaderTitle, HeaderShownContext } from '@react-navigation/elements';
import FeedbackScreen from '../screens/FeedbackScreen';



const Stack = createStackNavigator();

const Rootnavigation = ({navigation}) => {

  const {islogin,setLogin,user,setUser } = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  // console.log("user._auth._authResult",user?._auth?._authResult);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        {auth().currentUser==null?<> 
          <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        </>:
        <>
         <Stack.Screen name="Tab" component={TabNavigation}  
        
        />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} options={{
          headerShown:true,
          headerLeftLabelVisible:false,
          headerTitle:"Feedback",
          headerTitleAlign:'center',
          }} />
        </>
       

        
        } 

       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rootnavigation

const styles = StyleSheet.create({})