import React, { Component } from "react";
import { Image, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{width:80,height:80,backgroundColor:'#000'}}></View>
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text>
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text>
      <Ekeke />
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text>
      <Ekeke />
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text> 
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text>
      <Ekeke />
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text>
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text> 
      <Ekeke />
      <Text>eheheheheheheheheheheheheheheheheheheheheh</Text> 
      <Poto />
      <TextInput style={{borderWidth:1,height:50}}/>
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Ekeke = () => {
  return <Text>aigoooooooooooooooooo</Text>;
};

const Poto = () => {
  return <Image source={{uri:'https://picsum.photos/200'}} style={{width:100,height:100}}/>;
};

class BoxGreen extends Component {
  render(): React.ReactNode {
    return <Text>RT DARI CLASS INI BOSS</Text>;
  }
};

class Profile extends Component {
  render(): React.ReactNode {
    return (
      <View>
        <Image source={{uri:'https://picsum.photos/200'}} style={{width:150, height:150, borderRadius:500}}/>
        <Text>ini class profile bos</Text>
      </View>
    )
      
  }
};


export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Ngetes perubahan app.tsx!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
