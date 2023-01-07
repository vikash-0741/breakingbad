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
import Header from '../Components';
import {useSelector} from 'react-redux';
import useOrderActions from '../Store/Actions/Home';
import RenderCard from '../Components/RenderCard/RenderCard';

function Dashboard(props) {
  const {navigation} = props;

  const {getUsersData} = useOrderActions();

  const {users} = useSelector(s => s.users);

  useEffect(() => {
    getUsersData();
  }, []);

  const navToFav = () => navigation.navigate('favourite');
  const navToSearch = () => navigation.navigate('Search');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header headerTitle=" The Breaking bad" />
        <TouchableOpacity style={{marginTop: 50}} onPress={navToSearch}>
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
          data={users}
          numColumns={2}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <RenderCard key={item.id} data={item} {...props} />
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
