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

import database from '../data_file.json';

import { MonoText } from '../components/StyledText';

class AgendaScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('other', navigation.state.routeName),
    };
  };

  render() {
    // const database = firebase.database();
    const { title, location, time, description } = database.agenda.Saturday[0]

    return(
      <View>
      <ScrollView>
        <Card
          title={
            <View>
              <Text style={{
                  marginTop: 16,
                  marginLeft: 16
                }}>{title}</Text>
              <Text style={{
                  marginBottom: 16,
                  marginLeft: 16
                }}>{time}</Text>
            </View>
          }
          image={require('../assets/images/robot-dev.png')}
          imageStyle={{height:192}}
        >
          <Text style={{marginBottom: 10}}>
            {location}
          </Text>
          <Text style={{marginBottom: 10}}>
            {description}
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
