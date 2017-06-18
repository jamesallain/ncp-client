
// @flow

import { 
  Environment,
  Network, 
  RecordSource, 
  Store 
} from 'relay-runtime'
//import Config from 'react-native-config'
//exp://192.168.56.1:19000
// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise
//http://192.168.1.129:3080/graphql
function fetchQuery (operation, variables, cacheConfig, uploadables) {
  return fetch('http://localhost:3080/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    console.log("fetchQuery response:",reponse);
    return response.json()
  }).catch((err) => {
     console.log("fetchQuery error:", err);
     return err; 
  })
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store
})

//No data return for operation
//See the error `source` property for more information
//{"line":115109,"column":48,"sourceURL":"http://localhost:19002/main.bundle?platform=ios&dev=true&strict=false&minify=false&hot=false&assetPlugin=expo/tools/hashAssetFiles"}
// const env = new Environment({
//   network,
//   store
// })

// export default env



 //Authorization: `Bearer xxxxxx`,
      //Authorization: `Bearer ${Config.GITHUB_ACCESS_TOKEN}`,
      //'If-None-Match': ''








//   return fetch('https://api.github.com/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${Config.GITHUB_ACCESS_TOKEN}`,
//       'If-None-Match': ''
//     },
//     body: JSON.stringify({
//       query: operation.text, // GraphQL text from input
//       variables
//     })
//   }).then(response => {
//     return response.json()
//   })
// }