import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert
} from 'react-native';
import {
  Image,
  Input,
  Button
} from 'react-native-elements';
import * as firebase from 'firebase';

import { MonoText } from '../components/StyledText';


class ProfileScreen extends React.Component {
  _signInAsync = () => {
    firebase.auth().signInWithEmailAndPassword("steven.huynh@stanford.edu","1234").catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);


      if(errorCode === "auth/wrong-password") {
        Alert.alert("Invalid Password");
        this.props.navigation.navigate('Main');
      } else {
        console.log("STEVEN HUYNH");

      }

    })
  }

  render() {
    return(
      <View>
        <Image
          source={require('../assets/images/NorCalUVSA.png')}
          style={{width: 200, height: 200, marginHorizontal: 100, marginTop: 20, marginBottom: 48}}
          />
        <Input inputContainerStyle={{marginHorizontal: 40, marginBottom: 30}}
          placeholder='Full Name'
        />
      <Input inputContainerStyle={{marginHorizontal: 40, marginBottom: 33}}
          placeholder='Access Code'
        />
        <Button
          title='Sign In'
          containerStyle={{marginHorizontal: 40 }}
          onPress={this._signInAsync}
        />
      </View>
    )
  }

}

export default ProfileScreen;
