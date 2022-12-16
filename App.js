import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <View>
      <TouchableOpacity>
        <Image style={styles.backbutton} source={require('./assets/icon.png')}></Image>
      </TouchableOpacity>
    </View>
      <Text style={styles.paragraph}>
        Create Personal Account 
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  backbutton: {
    width: 30,
    height: 30,
    marginTop: 10
  }
});
