import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  Image,
  Input,
  Button
} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default function ProfileScreen() {
  return(
    <View>
      <Image
        source={require('../assets/images/NorCalUVSA.png')}
        style={{width: 200, height: 200, marginHorizontal: 100, marginTop: 20, marginBottom: 48}}
        />
      <Input inputContainerStyle={{marginHorizontal: 40}}
        placeholder='Full Name'
      />
    <Input inputContainerStyle={{marginHorizontal: 40, marginBottom: 33}}
        placeholder='Access Code'
      />
      <Button
        title='Sign In'
        containerStyle={{marginHorizontal: 40}}
      />
    </View>

  )
}
