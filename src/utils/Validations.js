import { Strings } from "../constants";
import { Alert } from "react-native";

export const validatePin = (password) => {
    const temp = password
    if (!temp) {
        return Strings.PasswordEmptyErr
    }
    if (String(temp).length < 8) {
        return Strings.PasswordErr
    }
    return null

}

export const validateEmail = (email) => {
    const check = email
    let regix = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!check) {
        return Strings.MailEmptyErr
    }
    if (!regix.test(String(check).toLowerCase())) {
        return Strings.MailNotValidErr
    }
    return null

}

export const alertBox = (title, description) => {
    Alert.alert(title, description)

}
