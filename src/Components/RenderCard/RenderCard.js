import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useOrderActions from '../../Store/Actions/Home';

const RenderCard = props => {
  const {data, navigation} = props;
  const {favorite, avatar, id, last_name, first_name} = data;

  const {handleFav} = useOrderActions();

  const handleFavClick = () => {
    handleFav(id);
  };

  const navToDetailsScreen = () => navigation.navigate('DetailsScreen', {data});

  return (
    <View style={styles.renderCardContainer}>
      <TouchableOpacity onPress={navToDetailsScreen}>
        <Image source={{uri: avatar}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <View>
          <Text
            style={styles.userText}
            numberOfLines={1}>{`${first_name} ${last_name} `}</Text>
          <Text style={styles.subHeadingName}>{data.first_name}</Text>
        </View>
        <TouchableOpacity onPress={handleFavClick} style={styles.iconContainer}>
          {favorite ? (
            <AntDesign name="heart" size={24} color="#16ca75" />
          ) : (
            <Feather name="heart" size={24} color="#636363" />
          )}
        </TouchableOpacity>
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

// memo to avoid rerender of the component if used in list

export default memo(RenderCard);
