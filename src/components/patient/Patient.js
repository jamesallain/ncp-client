import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';
import { CardSection } from '../common/CardSection'

class Patient extends Component {

  render () {

    const { titleStyle } = styles;

    return (
     <CardSection>
       <Text style={this.titleStyle}> 
         Name: {this.props.patient.id} 
       </Text>
       <Button onClick={this._handleDelete} > 
         <Text>Delete</Text> 
       </Button>
     </CardSection>
    )
  }

  _handleDelete = () => {

  }
}
//Name: {this.props.patient.name.text} 

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

//Patient_patient = File name + name of prop that is injected
export default createFragmentContainer(
  Patient,
  graphql`    
    fragment Patient_query on Query {
      id
    }
    fragment Patient_patient on Patient {
      id
    }
  `
)


