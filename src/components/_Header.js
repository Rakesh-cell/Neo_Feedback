import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

import { COLORS } from '../constants';
import { heightScale,widthScale } from '../utils/Dimentions';


const _Header = (props) => {

  const renderTitle=()=>{
    return (
      <Text style={styles.headerTitle} >{props?.title}</Text>
    )

  }
  return (
    <View style={styles.headerView}>
         {/* {this.renderLeft()} */}
         {renderTitle()}
      </View>
  )
}





export default _Header;
const styles = StyleSheet.create({
  headerView:{  
      alignItems:'center' ,flexDirection: 'row',
      width: "auto",
      height: heightScale(50),
      backgroundColor:"white",
      zIndex:10

    },
    headerTitle:{
         color: COLORS.blue,
        fontSize: 20,
        fontWeight: "bold",
        flex: 1, // make full width on android
        textAlign: 'center',
        color:COLORS.black
    },
    
})


