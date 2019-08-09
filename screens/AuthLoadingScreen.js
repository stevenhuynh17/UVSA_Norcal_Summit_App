import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('user');
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
    console.log(userToken);
  };

  render() {
    return (
      <View style={{flex:1}}>
        <ActivityIndicator />
        <StatusBar barstyle="default" />
      </View>
    )
  }
};

export default AuthLoadingScreen;
