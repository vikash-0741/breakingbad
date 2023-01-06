/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './src/Home';

import React from 'react';
import Favourite from './src/Favourites';
import DetailsScreen from './src/DetailsScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // title: 'Breaking bad',
        }}>
        <Stack.Screen name="Breaking bad" component={Dashboard} />
        <Stack.Screen name="favourite" component={Favourite} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <SafeAreaProvider>
    //       <Home />
    //     </SafeAreaProvider>
    //   </ScrollView>
    //   {/* <NavigationContainer ref={navigationRef}>
    //     <RootStack.Navigator
    //       mode="modal"
    //       initialRouteName="home"
    //       screenOptions={{
    //         headerShown: false,
    //       }}>
    //       <RootStack.Screen name="home" component={Home} />
    //     </RootStack.Navigator>
    //   </NavigationContainer> */}
    // </SafeAreaView>
  );
}

export default App;
