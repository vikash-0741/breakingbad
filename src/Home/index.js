import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ApiCall from '../utiles';
import Header from '../Components';

const RenderCard = props => {
  const {data, usersData, navigation} = props;
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => setIsFav(v => !v);
  const navToDetailsScreen = () =>
    navigation.navigate('DetailsScreen', {data, usersData});

  return (
    <View style={styles.renderCardContainer}>
      <TouchableOpacity onPress={navToDetailsScreen}>
        <Image source={{uri: data.avatar}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <View>
          <Text
            style={styles.userText}
            numberOfLines={1}>{`${data.first_name} ${data.last_name} `}</Text>
          <Text style={styles.subHeadingName}>{data.first_name}</Text>
        </View>
        <TouchableOpacity onPress={handleFav} style={styles.iconContainer}>
          {isFav ? (
            <AntDesign name="heart" size={24} color="#16ca75" />
          ) : (
            <Feather name="heart" size={24} color="#636363" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Dashboard(props) {
  const {navigation} = props;

  const [data, setData] = useState([]);
  console.log('-------->data', data);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await ApiCall({
      url: 'https://reqres.in/api/users?page=2',
      method: 'GET',
    });
    setData(response.data);
  };

  const navToFav = () => navigation.navigate('favourite');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header headerTitle=" The Breaking bad" />
        <TouchableOpacity style={{marginTop: 50}}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navToFav}
          style={{marginTop: 50, marginLeft: 10}}>
          <AntDesign name="heart" size={24} color="#16ca75" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          numColumns={2}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <RenderCard index={index} data={item} usersData={data} {...props} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexGrow: 1,
    marginTop: 30,
  },
  contentContainer: {
    flexDirection: 'column',
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    marginBottom: 20,
  },
  renderCardContainer: {
    margin: 10,
    flex: 1,
  },
  image: {
    height: 250,
    width: 170,
    borderRadius: 7,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 5,
  },
  userText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  subHeadingName: {
    color: '#fff',
    marginTop: 3,
  },
});

export default Dashboard;
