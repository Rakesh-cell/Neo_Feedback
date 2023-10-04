import { StyleSheet } from 'react-native'
import React from 'react'

import { Avatar, Card } from 'react-native-paper';
import { COLORS } from '../constants';

const LeftContent = props => <Avatar.Icon {...props} icon="account-tie" />


const _EmpCard = ({ onPress }) => {
  return (
    <Card style={styles.container} onPress={onPress}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    </Card>
  )
}

export default _EmpCard

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: COLORS.bglightyellow,
  }
})
