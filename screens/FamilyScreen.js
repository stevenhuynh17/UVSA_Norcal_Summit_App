import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  ListItem
} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

class FamilyScreen extends React.Component {


  render() {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]

    return(
      <View>
        {
          list.map((person, index) => (
            <ListItem
              key={index}
              leftAvatar={{ source: {uri: person.avatar_url}}}
              title={person.name}
              subtitle={person.subtitle}
            />
          ))
        }
      </View>
    )
  }
};

export default FamilyScreen;
