import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';

import Home from '../screens/Home';
import EmpList from '../screens/EmpList';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export default TabNavigation=()=> {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={COLORS.green}
        inactiveColor={COLORS.lightred}
        barStyle={{ backgroundColor: COLORS.bglightblue,height:"10%" }}
        >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="EmpList" component={EmpList} options={{
          tabBarLabel: 'Feedback',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>

  );
}
