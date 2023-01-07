/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './src/Home';

import React from 'react';
import Favourite from './src/Favourites';
import DetailsScreen from './src/DetailsScreen';
import {Provider} from 'react-redux';
import Store from './src/Store/store';
import Search from './src/Search/Search';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={Store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Breaking bad" component={Dashboard} />
              <Stack.Screen name="favourite" component={Favourite} />
              <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
              <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

export default App;
