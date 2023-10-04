import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { _Button, _EmpCard, FeedbackCardCustom } from '../components'

import { COLORS } from '../constants'
import { heightScale } from '../utils/Dimentions'
import { AuthContext } from './AuthProvider'
import _Header from '../components/_Header'


import { ScrollView } from 'react-native-gesture-handler'


const Home = ({ navigation, route }) => {
  console.log("navig", navigation, route)

  const {user, data } = useContext(AuthContext)

  useEffect(() => {
    // dbRead(user?.email)

  }, [])
  console.log("home data and user", data,user)

  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://example.com/johndoe.jpg',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // Add more feedback objects here
  ];
  return (
    <SafeAreaView>
      <_Header title="Home" />
      <View style={{ marginHorizontal: 10 }}>


        <FlatList
          showsVerticalScrollIndicator={false}
          data={feedbacks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FeedbackCardCustom feedback={item} />

          )}
        />

      </View>

    </SafeAreaView>
  )
}


export default Home

