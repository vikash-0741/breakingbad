import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
        marginTop: 50,
      }}>
      <Text
        style={{
          fontSize: 24,
          color: '#fff',
          fontWeight: '800',
        }}>
        The Breaking bad
      </Text>
    </View>
  );
};

export default Header;
