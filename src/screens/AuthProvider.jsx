import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Settings } from 'react-native-fbsdk-next';
// import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';


// import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState();
  const [loginBy,setLoginBy] = useState("Email")
  Settings.setAppID('1012643396599871');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        data,
        setData,
        login: async (email, password) => {
          try {
            const userCred = await auth().signInWithEmailAndPassword(email, password);
            console.log("userCred",userCred);
            setLoginBy("Email")
            //  setData(userCred)
            // console.log("auth.current user",auth().currentUser.uid)
            // console.log(userCred.additionalUserInfo?.user?.email);
          } catch (e) {
            console.log("login", e);
          }
        },
        register: async (email, password, role) => {
          try {
            const res = await auth().createUserWithEmailAndPassword(email, password);
            console.log("register",res);
            setLoginBy("Email")
            
          } catch (e) {
            console.log(e);
          }
        },
        dbRead: async (mail) => {
          try {
            database()
              .ref(`/users/`)
              // .once(`${auth().currentUser.uid}`)
              .on('value', snapshot => {
                console.log('User data: ', snapshot.val());
                setData(snapshot.val())

              });


          } catch (e) {
            console.log(e);
          }

        },
        dbWrite: async (email, password, role) => {
          try {
            // firebase.database().ref('users').push(user);
            database()
              .ref(`/users/${password}`)
              .set({
                mail: email,
                password: password,
                role: role,
                id: "3"
              })
              .then(() => console.log('Data set.'));

          } catch (e) {
            console.log(e);
          }

        },
        dbUpdate: async () => {
          try {
            database()
              .ref(`/users/${auth().currentUser.uid}`)
              .update({
                age: 32,
              })
              .then(() => console.log('Data updated.'));

            // The push method will automatically generate a new key if one is not provided:
            // const newReference = database().ref('/users').push();
            // console.log('Auto generated key: ', newReference.key);
            // newReference
            //   .set({
            //     age: 32,
            //   })
            //   .then(() => console.log('Data updated.'));

          } catch (e) {
            console.log(e);
          }

        },
        dbDelete: async () => {
          try {
            //   await database().ref('/users/123').remove();
            // // Optionally, you can also set the value of a reference node to null to remove it from the database:

            // await database().ref('/users/123').set(null);

          } catch (e) {
            console.log(e);
          }

        },
        logout: async () => {
          try {
            console.log("logout",loginBy)
            setUser(null)
            setData(null)
            if(loginBy=="Email"){
              await auth().signOut();
            }
            if(loginBy=="Google"){
              console.log("google logout")
              await GoogleSignin.signOut();

            }
            if(loginBy=="Facebook"){
             LoginManager.logOut();
            }

          } catch (e) {
            console.log("logout error",e);
          }
        },
        googleLogin: async () => {
          // Get the users ID token
          //   const { idToken } = await GoogleSignin.signIn();
         try {
          await GoogleSignin.hasPlayServices();
          const userinfo = await GoogleSignin.signIn();
          console.log("google login",userinfo)
          setUser(userinfo)
          setLoginBy("Google")



          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(userinfo.idToken);

          // Sign-in the user with the credential
         return auth().signInWithCredential(googleCredential);
          
         } catch (error) {
            console.log(error)
         }
  
        },
       
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
               
            console.log("fblogin",result)
            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }
            // setUser(result)

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }
            setLoginBy("Facebook")

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            // Sign-in the user with the credential
            return auth().signInWithCredential(facebookCredential)    
             
          }
          catch (error) {
            console.log(error);
          }
        },
        
      }}
      >
      {children}
    </AuthContext.Provider>
  );
};