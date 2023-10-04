import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { fontScale, heightScale } from '../utils/Dimentions';
import { COLORS } from '../constants';

const Input = (props) => {
  const { label, leftIcon, rightIcon, value, errMsg, onChangeText, secure, placeholder } = props
  const [righticon, setRightIcon] = useState(rightIcon);
  const [securepass, setsecurepass] = useState(secure);

  const iconclicked = () => {
    if (righticon == 'eye-off') {
      setRightIcon('eye')
      setsecurepass(false)
    } else if (righticon == 'eye') {
      setRightIcon('eye-off')
      setsecurepass(true)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.inputcontainer}>
        <Icon
          name={leftIcon}
          color={COLORS.black}
          size={20}

        />
        <TextInput style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={securepass}
          value={value}
        />
        <Icon
          name={righticon}
          color={COLORS.black}
          size={20}
          onPress={iconclicked}
        />
      </View>
      {errMsg ? <Text style={styles.errstyle}>{errMsg}</Text> : null}

    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    marginVertical: heightScale(12),
    width: "auto",
  },
  title: {
    fontSize: fontScale(14),
    color: COLORS.black,
    fontWeight: 'bold',
    lineHeight: 20
  },
  inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    height: heightScale(40),
    borderBottomWidth: 1,
    paddingHorizontal: 3,
  },
  input: {
    flex: 1,
    fontSize: fontScale(16),
    marginLeft: 10,
  },
  errstyle: {
    color: 'red',
    fontSize: fontScale(10)
  }

})