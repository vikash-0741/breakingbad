import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function NoResult({title, style, color}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, {color: color}]}>
        {title || 'No data found'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    backgroundColor: '#000',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
  },
});

export default NoResult;
