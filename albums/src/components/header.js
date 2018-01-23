// Import libraries for making a Component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Make a Component
const Header = () => (
  <View style={styles.container} >
    <Text>Albums</Text>
  </View>
);


// Make the component available to other parts of the app

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
});


export default Header;
