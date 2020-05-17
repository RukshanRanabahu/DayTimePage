/**
 *author       Rukshan Ranabahu
 *type         Page
 *created      14-05-2020
 *modified     14-05-2020
 *copyright    Zincat Technologies, Sri Lanka
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const coverImage = '../../../imeges/header_cover.jpg';

export class HeaderSection extends React.Component {
  render() {
    return (
      // Header section UI
      <View>
        <View style={styles.container}>
          <ImageBackground source={require(coverImage)} style={styles.image}>
            <View style={styles.alignBoxOne}>
              <View style={styles.searchBox}>

                <TextInput
                  style={styles.searchBar}
                  placeholder="How Can I Help You?"
                // onChangeText={text => onChangeText(text)}
                />
                <Image style={styles.searchIcon} source={require('../../../imeges/zoom.png')} />
              </View>
              <View style={styles.alignBoxTwo}>
                <Text style={styles.welcome}>HI KASUN,</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },

  searchSection: {
    flex: 1,
    width: 200,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  image: {
    height: Dimensions.get('window').height * 0.35,
  },
  welcome: {
    color: "#f5f8ff",
    fontSize: 30,
    fontWeight: "bold",
  },
  alignBoxOne: {
    padding: 20,
    marginTop: 10,
  },
  alignBoxTwo: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get('window').height * 0.15,
  },
  searchBox: {
    // flex: 1,
    // flexDirection: 'row',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    paddingLeft: 50,
    borderRadius: 20,
  },
  searchIcon: {
    marginTop: 8,
    marginLeft: 10,
    position: "absolute",
  }
});

export default HeaderSection;
