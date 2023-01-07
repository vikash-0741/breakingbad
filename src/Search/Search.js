import React, {useMemo, useState} from 'react';
import {
  FlatList,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import RenderCard from '../Components/RenderCard/RenderCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoResult from '../Components/NoResult';

const Search = props => {
  const {navigation} = props;
  const [searchText, setSearchText] = useState('');
  const {users} = useSelector(s => s.users);

  const searchedUsers = useMemo(() => {
    const result = users?.filter(
      (item, i) =>
        item.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchText.toLowerCase()),
    );
    return result || [];
  }, [users, searchText]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
            <TextInput
              onChangeText={e => setSearchText(e)}
              value={searchText}
              placeholder="Search"
              placeholderTextColor="#fff"
              cursorColor="#fff"
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.clearText}
            onPress={() => setSearchText('')}>
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          {searchedUsers.length ? (
            <FlatList
              data={searchedUsers}
              numColumns={2}
              horizontal={false}
              keyExtractor={(item, index) => index.toString()}
              style={styles.contentContainer}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <RenderCard {...props} key={item.id} data={item} />
              )}
            />
          ) : (
            <NoResult color="#16ca75" title="No Character Found" />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    marginTop: 15,
    backgroundColor: '#000',
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
  safeAreaView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(36,36,36)',
    paddingBottom: 20,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    fontSize: 24,
    marginLeft: 20,
    color: '#fff',
    fontWeight: '100',
  },
  clearText: {
    marginTop: 10,
  },
});

export default Search;
