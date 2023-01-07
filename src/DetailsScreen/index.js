import React, {useMemo} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const RenderCard = props => {
  const {item, navigation} = props;
  return (
    <View style={styles.renderCardContainer}>
      <TouchableOpacity
        onPress={() => navigation.push('DetailsScreen', {data: item})}>
        <Image source={{uri: item.avatar}} style={styles.renderImage} />
      </TouchableOpacity>

      <View style={styles.renderCardText}>
        <Text
          numberOfLines={1}
          style={
            styles.renderCardUserText
          }>{`${item.first_name} ${item.last_name} `}</Text>
        <Text style={styles.renderCardUserSubText}>{item.first_name}</Text>
      </View>
    </View>
  );
};

const Header = props => {
  const {navigation} = props;
  return (
    <View style={styles.headerContainer}>
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

function UserProfile({data}) {
  return (
    <View style={styles.userProfileContainer}>
      <ImageBackground
        source={{uri: data.avatar}}
        style={styles.backgroundImage}
      />
      <View style={styles.imageContainer}>
        <Image source={{uri: data.avatar}} style={styles.image} />
        <Text style={styles.userText}>
          {`${data.first_name} ${data.last_name}`}
        </Text>
        <Text style={styles.subText}>Heisenberg</Text>
      </View>
    </View>
  );
}

const SeasonCard = props => {
  const {index} = props;
  return (
    <TouchableOpacity style={styles.seasonCard}>
      <Text style={styles.seasonCardText}>Season {index + 1}</Text>
    </TouchableOpacity>
  );
};

const OtherCharacters = props => {
  const {usersData} = props;
  return (
    <View>
      <Text style={styles.otherText}>Other characters</Text>
      <FlatList
        data={usersData}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <RenderCard key={item.id} item={item} {...props} />
        )}
      />
    </View>
  );
};

const UserDetails = () => {
  return (
    <View>
      <View style={styles.userDetailsContainer}>
        <View>
          <Text style={styles.text}>Potrayed</Text>
          <Text style={styles.userSubText}>Bryan Cranston</Text>
        </View>
        <View style={styles.dobContainer}>
          <Text style={styles.dobText}>09-July-1958</Text>
          <AntDesign name="gift" size={24} color="#fff" />
        </View>
      </View>
      <View style={styles.otherDetailsContainer}>
        <Text style={styles.text}>Occupation</Text>
        <Text style={styles.userSubText}>High School Chemistry Teacher</Text>
        <Text style={styles.userSubText}>King Pin</Text>
      </View>
      <View style={styles.appeared}>
        <Text style={styles.text}>Appeared in</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.contentContainerStyleSeason}>
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
  const {data} = route?.params || {};

  const {users} = useSelector(s => s.users);

  const otherUser = useMemo(() => {
    return users.filter(i => i.id !== data.id);
  }, [data, users]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header {...props} />
        <UserProfile data={data} />
        <UserDetails />
        <OtherCharacters {...props} usersData={otherUser} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    left: 0,
    top: 5,
  },
  userProfileContainer: {
    flexGrow: 1,
    position: 'relative',
  },
  backgroundImage: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH,
    opacity: 0.3,
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    height: 200,
    width: 180,
    alignSelf: 'center',
    borderRadius: 5,
  },
  userText: {
    color: '#fff',
    fontSize: 25,
    fontStyle: 'normal',
    alignSelf: 'center',
    fontWeight: '700',
    marginTop: 20,
  },
  subText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 5,
  },
  seasonCard: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgb(26,26,26)',
    borderRadius: 5,
  },
  seasonCardText: {
    color: '#fff',
    fontSize: 14,
  },
  otherText: {
    color: '#fff',
    fontSize: 24,
  },
  renderCardContainer: {
    margin: 10,
  },
  renderImage: {
    height: 250,
    width: 170,
    borderRadius: 7,
  },
  renderCardText: {
    padding: 5,
  },
  renderCardUserText: {
    color: '#fff',
    fontSize: 18,
  },
  renderCardUserSubText: {
    color: '#fff',
    fontSize: 13,
    padding: 3,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: '#16ca75',
    fontSize: 14,
  },
  userSubText: {
    color: '#fff',
    fontSize: 14,
  },
  contentContainerStyleSeason: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dobText: {
    color: '#fff',
    marginRight: 15,
    fontSize: 15,
  },
  otherDetailsContainer: {
    padding: 10,
    marginTop: 20,
  },
  appeared: {
    padding: 10,
    marginTop: 20,
  },
});

export default DetailsScreen;
