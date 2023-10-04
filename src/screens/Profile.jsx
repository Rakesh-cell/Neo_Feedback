import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { COLORS } from '../constants';
import { _Header } from '../components';
import { AuthContext } from './AuthProvider';
import { ScrollView } from 'react-native-gesture-handler';
const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState('CEO');
  const [designation, setDesignation] = useState('Software Engineer');
  const [employeeId, setEmployeeId] = useState('123456');
  const [email, setEmail] = useState('XXXXXXXXXXXXXX');

  const { logout } = useContext(AuthContext)

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };
  const handleLogout = () => {
    logout()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <_Header title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.container}>
          <Avatar.Image
            source={{ uri: 'https://picsum.photos/700' }}
            size={100}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
          <Text style={styles.designation}>{designation}</Text>
          <Text style={styles.employeeId}>Employee ID: {employeeId}</Text>
          <TextInput
            label="Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            editable={isEditable}
            disabled={!isEditable}
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder='Enter your email'
            editable={isEditable}
            disabled={!isEditable}
            style={styles.input}
          />
          <TextInput
            label="Role"
            value={role}
            onChangeText={(text) => {
              setRole(text)
            }}
            editable={isEditable}
            disabled={true}
            style={styles.input}
          />
          <TextInput
            label="Designation"
            value={designation}
            onChangeText={(text) => {
              setDesignation(text);
            }}
            editable={isEditable}
            disabled={!isEditable}
            style={styles.input}
          />
          <TextInput
            label="Employee ID"
            value={employeeId}
            onChangeText={(text) => {
              setEmployeeId(text);
            }}
            editable={isEditable}
            disabled={!isEditable}
            style={styles.input}
          />
          <Button onPress={toggleEdit} mode="contained" style={styles.button}>
            {/* {isEditable ? 'Save' : 'Edit'} */}edit
          </Button>
          <Button onPress={handleLogout} mode="contained" style={styles.button}>
            Logout
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  profilePicture: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  role: {
    fontSize: 18,
    marginBottom: 8,
  },
  designation: {
    fontSize: 18,
    marginBottom: 8,
  },
  employeeId: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    width: '100%',
    color: COLORS.black
  },
  button: {
    marginVertical: 8,
    width: '100%',
  },
});

export default Profile;


