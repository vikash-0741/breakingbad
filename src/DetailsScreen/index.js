import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RenderCard = props => {
  const {item} = props;
  return (
    <View style={{margin: 10}}>
      <TouchableOpacity>
        <Image
          source={{uri: item.avatar}}
          style={{height: 250, width: 170, borderRadius: 7}}
        />
      </TouchableOpacity>

      {/* <View>
        <Text numberOfLines={1}>{`${data.first_name} ${data.last_name} `}</Text>
        <Text>{data.first_name}</Text>
      </View> */}
    </View>
  );
};

const Header = props => {
  const {navigation} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        left: 0,
        top: 25,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={28}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="heart" size={24} color="#16ca75" />
      </TouchableOpacity>
    </View>
  );
};

const SeasonCard = props => {
  const {index} = props;
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: 'rgb(26,26,26)',
        borderRadius: 5,
      }}>
      <Text style={{color: '#fff', fontSize: 14}}>Season {index + 1}</Text>
    </TouchableOpacity>
  );
};

const OtherCharacters = props => {
  const {usersData} = props;
  return (
    <View style={{flex: 1}}>
      <Text style={{color: '#fff', fontSize: 24}}>Other characters</Text>
      <ScrollView horizontal style={{flex: 1}}>
        {usersData.map(item => (
          <RenderCard item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const UserDetails = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#16ca75', fontSize: 14}}>Potrayed</Text>
          <Text style={{color: '#fff', fontSize: 14}}>Bryan Cranston</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#fff', marginRight: 15, fontSize: 15}}>
            09-July-1958
          </Text>
          <AntDesign name="gift" size={24} color="#fff" />
        </View>
      </View>
      <View style={{padding: 10, marginTop: 20}}>
        <Text style={{color: '#16ca75', fontSize: 14}}>Occupation</Text>
        <Text style={{color: '#fff', fontSize: 14}}>
          High School Chemistry Teacher
        </Text>
        <Text style={{color: '#fff', fontSize: 14}}>King Pin</Text>
      </View>
      <View style={{padding: 10, marginTop: 20}}>
        <Text style={{color: '#16ca75', fontSize: 14}}>Appeared in</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{flexDirection: 'row', marginTop: 10}}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SeasonCard index={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

function DetailsScreen(props) {
  const {route} = props;
  const {data, usersData} = route?.params || {};
  console.log('-------->data main', data);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#000',
        flex: 1,
      }}
      style={{backgroundColor: '#000', flex: 1, flexGrow: 1}}>
      <Header {...props} />
      <Image
        source={{uri: data.avatar}}
        style={{
          height: '50%',
          width: '100%',
          opacity: 0.2,
        }}
      />
      <View
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          top: 223,
          // bottom: 0,
          zIndex: 1,
        }}>
        <Image
          source={{uri: data.avatar}}
          style={{
            height: 200,
            width: 180,
            alignSelf: 'center',
            borderRadius: 5,
            position: 'relative',
          }}
        />
      </View>
      <Text
        style={{
          color: '#fff',
          fontSize: 25,
          fontStyle: 'normal',
          alignSelf: 'center',
          fontWeight: '700',
        }}>
        {`${data.first_name} ${data.last_name}`}
      </Text>
      <Text
        style={{
          color: '#fff',
          alignSelf: 'center',
          fontSize: 18,
          marginTop: 5,
        }}>
        Heisenberg
      </Text>
      <UserDetails />
      <OtherCharacters usersData={usersData} />
    </ScrollView>
  );
}

export default DetailsScreen;
