import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { graphql, createFragmentContainer } from "react-relay";

import Patient from "./Patient";

class PatientList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSoure = ds.cloneWithRows(this.props.patient);
  }

  renderRow(patient) {
    return <Patient patient={patient} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

export default createFragmentContainer(
  PatientList,
  graphql`
      fragment PatientList_query on Query {  
        ...Patient_query
        allPatients (
          first: 5,
          orderBy: NAME_ASC
        ) @connection (key: "PatientList_allPatients", filters: [] ) {
          edges{
            node{
              ...Patient_patient
            }
          }
        }            
      }
    `
);
