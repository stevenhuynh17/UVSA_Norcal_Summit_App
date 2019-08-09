import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import WorkshopScreen from '../screens/Workshops';
import AgendaScreen from '../screens/AgendaScreen';
import FamilyScreen from '../screens/FamilyScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Workshops = createStackNavigator(
  {
    Workshops: WorkshopScreen,
  },
  config
);

Workshops.navigationOptions = {
  tabBarLabel: 'Workshops',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart${focused ? '' : '-outline'}`
          : 'md-heart'
      }
    />
  )
};

Workshops.path = '';

const Family = createStackNavigator(
  {
    Family: FamilyScreen,
  },
  config
);

Family.navigationOptions = {
  tabBarLabel: 'Family',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
          : 'md-contact'
      }
    />
  )
};

Family.path = '';

const Agenda = createStackNavigator(
  {
    Agenda: AgendaScreen,
  },
  config
)

Agenda.navigationOptions = {
  header: null,
  tabBarLabel: 'Agenda',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? '' : '-outline'}`
          : 'md-calendar'
      }
    />
  )
};

Agenda.path = '';

const tabNavigator = createBottomTabNavigator({
  Workshops,
  Family,
  Agenda
},
{
  initialRouteName: "Agenda"
});

tabNavigator.path = '';

export default tabNavigator;
