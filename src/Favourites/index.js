import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RenderCard from '../Components/RenderCard/RenderCard';
import {useSelector} from 'react-redux';
import NoResult from '../Components/NoResult';

const Header = props => {
  const {navigation} = props;
  return (
    <View style={styles.headerFav}>
      <Text style={styles.favText}>Favourites</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

function Favourite(props) {
  const {users} = useSelector(s => s.users);

  const favoriteUser = useMemo(() => {
    const filteredData = users.filter(i => i.favorite);
    return filteredData;
  }, [users]);

  return (
    <View style={styles.favoriteContainer}>
      <Header {...props} />
      <View style={styles.cardContainer}>
        {favoriteUser.length ? (
          <FlatList
            data={favoriteUser}
            numColumns={2}
            horizontal={false}
            keyExtractor={(item, index) => index.toString()}
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <RenderCard key={item.id} data={item} {...props} />
            )}
          />
        ) : (
          <NoResult />
        )}
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
  headerFav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    padding: 20,
  },
  favText: {
    color: '#16ca75',
    fontWeight: '600',
    fontSize: 24,
  },
  favoriteContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default Favourite;
