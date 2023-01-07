import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>The Breaking bad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    margin: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '800',
  },
});

export default Header;
