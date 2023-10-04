import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState,useContext } from 'react'
import { Input, SocialButton, _Button } from '../../components'
import { Dropdown } from 'react-native-element-dropdown'

import { validateEmail, validatePin, alertBox } from '../../utils/Validations'
import { Strings, COLORS } from '../../constants'
import { fontScale, heightScale } from '../../utils/Dimentions'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../AuthProvider'

const Register = ({navigation}) => {
  
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const [err, seterr] = useState()
  const [passwordErr, setPasswordErr] = useState()
  const {user,dbWrite, register, googleLogin,fbLogin} = useContext(AuthContext);


  const [role, setrole] = useState("Employee")
  const data = [
    { label: "Employee", value: "Employee" },
    { label: "Manager", value: "Manager" },
  ]


  const handleregister = () => {

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
      // login(email,password)
      register(email, password, role)
      dbWrite(email,password, role)
      navigation.navigate('Login')
      setemail('')
      setPassword('')
    }

  }
  return (
    <SafeAreaView style={{ flex:1, margin: 20 }}>

      {/* title */}
      <View>
        <Text style={{ ...styles.title, fontSize: fontScale(40), fontWeight: 'bold', marginTop: heightScale(100) }}>iFeedback</Text>
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

      <Text style={styles.label}>Role</Text>
      <Dropdown
        placeholderStyle={{
          color: COLORS.black
        }}
        data={data}
        value={role}
        onChange={(item) => {
          setrole(item.value);
        }}
        style={styles.dropdown}
        placeholder={'Select Subsidiaries'}
        labelField={"label"}
        valueField={'value'}
        selectedTextStyle={styles.selectedTextStyle}
        itemContainerStyle={{ backgroundColor: "grey", }}
        itemTextStyle={{ color: "white" }}
        activeColor={'#0148a4'}
        mode={'modal'}

      />

      <View >
        <_Button btnText="Register" onPress={() => handleregister()} />
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 5 }}>
        <Text style={{ color: COLORS.black}}>Don't have a Account? </Text>
        <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('Login')}> Login </Text>
      </View>
      {/* Social buttons */}
      <View style={{ marginBottom: 10 }}>
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

export default Register

