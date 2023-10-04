import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import { Input, SocialButton, _Button } from '../../components'

import { validateEmail, validatePin, alertBox } from '../../utils/Validations'
import { Strings, COLORS } from '../../constants'
import { fontScale, heightScale } from '../../utils/Dimentions'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../AuthProvider'
const Login= ({navigation}) => {
  
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const [err, seterr] = useState()
  const [passwordErr, setPasswordErr] = useState()
  const {user,login,googleLogin,fbLogin} = useContext(AuthContext);
  // const {register,login,googleLogin,fbLogin} = useContext(AuthContext);

// console.log("user from login ",user)


  const handlelogin = () => {

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email) {
      alertBox("Email", Strings.MailEmptyErr)
    }
    else if (!pattern.test(String(email).toLowerCase())) {
      alertBox("Email", Strings.MailNotValidErr)
    }
    else if (password.length < 8) {
      alertBox("Password", Strings.PasswordErr)
    }
    else {
      login(email,password)
      // navigation.navigate('Home')
      setemail('')
      setPassword('')
    }
    
  }
  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: "631836446070-ocgbs34ttadqgb354f6vgmhk2d7qafkv.apps.googleusercontent.com",
    });
  }, []);
  return (
    <SafeAreaView style={{flex:1, margin: 20 }}>

      {/* title */}
      <View>
        <Text style={{ ...styles.title, fontSize:fontScale(40), fontWeight: 'bold', marginTop: heightScale(100) }}>iFeedback</Text>
        <Text style={{ ...styles.title, fontSize: fontScale(20), fontWeight: '200' }}>Welcome Back!</Text>
      </View>

      {/* input fields  */}
      <View >
        <Input
          label="User"
          leftIcon="mail"
          placeholder={"Enter Mail"}
          value={email}
          errMsg={err}
          onChangeText={(email) => {
            setemail(email)
            seterr(validateEmail(email))
          }}
        />
        <Input
          label="Password"
          leftIcon='lock-closed'
          placeholder={"Enter Password"}
          secure
          rightIcon="eye-off"
          value={password}
          errMsg={passwordErr}
          onChangeText={(password) => {
            setPassword(password)
            setPasswordErr(validatePin(password))
          }

          }
        />
      </View>

      <View >
        <_Button btnText="Login" onPress={() => handlelogin()} />
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 5 }}>
        <Text style={{ color: COLORS.black}}>Don't have a Account? </Text>
        <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('Register')}> Sign Up </Text>
      </View>
      {/* Social buttons */}
      <View 
    //   style={{bottom:5,top:heightScale(99),}}
      >
        <SocialButton
          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color={COLORS.lightblue}
          backgroundColor={COLORS.bglightblue}
          onPress={() =>fbLogin()}
        />

        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color={COLORS.lightred}
          backgroundColor={COLORS.bglightred}
          onPress={() =>googleLogin()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    color: COLORS.green,
  },
  dropdown: {
    height: heightScale(50),
    borderColor:COLORS.black,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    marginBottom: heightScale(12),
    color: COLORS.black,
  },
  label: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: 'bold',
    lineHeight: heightScale(20)
  },
})

export default Login

