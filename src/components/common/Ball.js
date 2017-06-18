import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {

    componentWillMount() {
        //this.position
    }

    render() {
        return(
            <View style ={styles.ball} />
        );
    }
}


const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30
    }
}