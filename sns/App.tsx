/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createRandomPerson } from './src/createRandomPerson';
import Item from './src/Item';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {Item()}
    </SafeAreaView>
  );
};


export default App;
