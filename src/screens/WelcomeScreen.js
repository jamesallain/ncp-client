import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
//import { Container, Button, Text } from 'native-base';
import { AppLoading } from 'expo';
import Slides from '../components/common/Slides';


const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#3A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '3A9F4' }
];


class WelcomeScreen extends Component {
  //if use arrow function don't need -- .bind(this)
  //navigation always gets passed as props with react-navigation -- if it is render from TabNavigator, StackNavigator, etc.
  state = { token: null };
  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.navigation.navigate('patient');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('Auth')
  }

  render(){
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <View>
        <Slides 
          data={SLIDE_DATA} 
          onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

export default WelcomeScreen;