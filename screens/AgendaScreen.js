import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon
} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default function Agenda() {
  return(
    <ScrollView>
      <Card
        title={
          <View>
            <Text style={{
                marginTop: 16,
                marginLeft: 16
              }}>[Insert Event Title]</Text>
            <Text style={{
                marginBottom: 16,
                marginLeft: 16
              }}>[Insert Event time]</Text>
          </View>
        }
        image={require('../assets/images/robot-dev.png')}
        imageStyle={{height:192}}
      >
        <Text style={{marginBottom: 10}}>
          [Insert Location]
        </Text>
        <Text style={{marginBottom: 10}}>
          [Insert Description]
        </Text>
        <Button
          icon={<Icon name='md-navigate' type='ionicon' color='#ffffff'/>}
          backgroundColor='#03A9F4'
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title=' Map' />
      </Card>
    </ScrollView>
  )
}
