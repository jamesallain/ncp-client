import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={stypes.buttonStyle}
          onPress={this.props.onComplete}
        />
      )
    }
  }
//this.props.onComplete() -- renders immediately
//this.props.onComplete -- renders when pressed

  renderSlider() {
    return this.props.data.map((slide, i) => {
      return(
        <View 
          key={slide.text} 
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      )
    });
  }


  render(){
    return (
      <ScrollView
        horizontal
        sytle = {{ flex: 1}}
        pagingEnabled
      >
      </ScrollView>
    );
  }
}


const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default Slides;