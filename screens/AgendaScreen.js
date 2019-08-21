import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToolbarAndroid
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon
} from 'react-native-elements';
import * as firebase from 'firebase';

import { MonoText } from '../components/StyledText';

class AgendaScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('other', navigation.state.routeName),
    };
  };



  render() {

    const database = firebase.database();
    const test = database.ref().once("value")
      .then((snapshot) => {
        console.log(snapshot);
      })

    return(
      <View>
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
      </View>
    )
  }
}

export default AgendaScreen;
