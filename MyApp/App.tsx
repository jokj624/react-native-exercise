/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };
 
  const submitAction = () => {
    Alert.alert(
      "알림",
      "Name: " + name + "\n" + "Phone: " + number + "\n" + "Email: " + email
    );
  };

  const analysisAction = () => {
    Alert.alert(
      "분석",
      "Name: " + name?.length + "\n" + "Phone: " + number?.length + "\n" + "Email: " + email?.length
    );
  };

  const colorStyle: Function = (choice : string) => {
    return {
      color: choice,
      flex: 1,
      fontSize: 20,
      fontWeight: '600',
    }
  };

  const textInputColor: Function = (choice: string) => {
    return {
      color: choice,
      flex: 1,
      borderWidth: 1,
      fontSize: 20,
      fontWeight: '600',
      width: width * 0.5,
      height: height * 0.03,
    }
  };

  return (
    <SafeAreaView style={[ backgroundStyle, styles.backgroundStyle] }>
      <Text style={colorStyle("black")}>실습 1</Text>
      <View style={styles.divStyle}>
        <Text style={colorStyle("black")}>Your Name: </Text>
        <TextInput
          placeholder = "Enter Your Name" 
          style = {textInputColor("black")}
          onChangeText={(e) => { setName(e); }}
        />
      </View>
      <View style={styles.divStyle}>
        <Text style={colorStyle("blue")}>Phone Number: </Text>
        <TextInput
          placeholder="Phone number"
          style={textInputColor("blue")}
          onChangeText={(e) => { setNumber(e); }}
        />
      </View>
      <View style={styles.divStyle}>
        <Text style={colorStyle("green")}>Email: </Text>
        <TextInput
          placeholder="Email address"
          style={textInputColor("green")}
          onChangeText= {(e) => { setEmail(e); }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={submitAction} style={{ flex: 1 }}>
          <Text style={colorStyle("blue")}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={analysisAction} style={{ flex: 1}}>
          <Text style={colorStyle("blue")}>Analysis</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  backgroundStyle: {
    flex: 0.5, 
    margin: 10, 
    alignItems: 'center',
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
