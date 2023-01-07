import React, {useMemo, useState} from 'react';
import {FlatList, TextInput, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import RenderCard from '../Components/RenderCard/RenderCard';

const Search = props => {
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
    <View style={styles.container}>
      <TextInput
        onChangeText={e => setSearchText(e)}
        value={searchText}
        placeholder="Search..."
      />
      <View style={styles.cardContainer}>
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
      </View>
    </View>
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

export default Search;
