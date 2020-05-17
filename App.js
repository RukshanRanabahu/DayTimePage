/**
 *author       Rukshan Ranabahu
 *type         Page
 *created      14-05-2020
 *modified     14-05-2020
 *copyright    Zincat Technologies, Sri Lanka
 */

import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  AppState,
  DefaultTabBar,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { HeaderSection } from './src/views/common/HeaderSection';
import CardButtons from './src/views/common/CardButtons';
import ItemCard from './src/views/common/ItemCard';

const App: () => React$Node = () => {
  return (
    <>
      {/* Page Content */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {/* heading and search bar */}
        <HeaderSection />

        {/* Categoriy card view */}
        <HeadingItem title={'Categories'} />
        <CardButtons />

        {/* Item/ Deals view */}
        <HeadingItem title={'Deals of the Day'} />
        <ItemCard />

        <HeadingItem title={'Top of this Week'} />
        <ItemCard />

        <HeadingItem title={'Explore More'} />
        <ItemCard />
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabView} onPress={() => { }}>
          <Image style={styles.tabIcon} source={require('./imeges/heart.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabView} onPress={() => { }}>
          <Image style={styles.tabIcon} source={require('./imeges/home.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabView} onPress={() => { }}>
          <Image style={styles.tabIcon} source={require('./imeges/profile.png')} />
        </TouchableOpacity>
      </View>

    </>
  );
};
const HeadingItem = ({ title }) => (
  // Heading and heading icon
  <View style={styles.headingOne}>
    <Text style={styles.headingText}>{title}</Text>
    <Image style={styles.headingIcon} source={require('./imeges/heading.png')} />
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  headingOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    margin: 20,
  },
  headingIcon: {
    height: 15,
    width: 10
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 20
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  tabView: {
    height: 40,
    backgroundColor: '#f5ab35',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tabIcon: {
    height: 20,
    width: 20
  },
});

export default App;
