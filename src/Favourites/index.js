import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = props => {
  const {navigation} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        padding: 20,
      }}>
      <Text style={{color: '#16ca75', fontWeight: '600', fontSize: 24}}>
        Favourites
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

function Favourite(props) {
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Header {...props} />
    </View>
  );
}

export default Favourite;
