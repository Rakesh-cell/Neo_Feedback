import React from 'react'
import { heightScale, fontScale } from '../utils/Dimentions'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const _Button = ({ onPress, btnText, bgcolor }) => {
    return (
        <TouchableOpacity style={styles.btn(bgcolor)} onPress={onPress}>
            <Text style={styles.btntext} >{btnText}</Text>
        </TouchableOpacity>
    )
}

export default _Button

const styles = StyleSheet.create({
    btn: bgcolor => ({
        height: heightScale(50),
        backgroundColor: bgcolor != null ? bgcolor : COLORS.blue,
        marginVertical: heightScale(20),
    }),
    btntext: {
        fontSize: fontScale(22),
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: heightScale(10),
    },
})