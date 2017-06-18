import React, { Component } from "react";
import { View, Text, FlatList, Platform } from "react-native";
import { Button } from "native-base";
import { graphql, QueryRenderer } from "react-relay";

import environment from '../common/createRelayEnvironment';
import PatientList from "../components/patient/PatientList";

const PatientScreen_AllPatientsQuery = graphql`
  query PatientScreen_AllPatientsQuery {
    query {
      ...PatientList_query
    }
  }
`;

class PatientScreen extends Component {
  static navigationOptions = ({ navigate }) => ({
    title: "Search Patients",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigate("welcome")}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1"
      />
    ),
    style: {
      marginTop: Platform.OS === "android" ? 24 : 0
    }
    //might have to use this instead
    // headerTitleStyle: {
    //   marginTop: 24
    // }
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <QueryRenderer
          environment={environment}
          query={PatientScreen_AllPatientsQuery}
          render={({ error, props }) => {
            if (error) {
              console.log(error);
              return <Text>Patient: {error.message}</Text>;
            } else if (props) {
              console.log(props.data);
              return <PatientList query={props.data} />;
            }
            return <Text>Loading</Text>;
          }}
        />

      </View>
    );
  }
}

export default PatientScreen;
