import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountInformation from './src/screens/AccountInformation';
import Demo from './src/screens/Demo';
import DemoChannel from './src/screens/DemoChannel';
import Events from './src/screens/Events';
import Favorite from './src/screens/Favorite';
import LastScreen from './src/screens/LastScreen';
import LiveTV from './src/screens/LiveTV';
import Movies from './src/screens/Movies';
import ParentalControl from './src/screens/ParentalControl';
import ProgressBar from './src/screens/ProgressBar';
import RecentlyViewed from './src/screens/RecentlyViewed';
import Series from './src/screens/Series';
import Settings from './src/screens/Settings';
import ShowLiveCategories from './src/screens/ShowLiveCategories';
import ShowSeriesCategories from './src/screens/ShowSeriesCategories';
import ShowVodCategories from './src/screens/ShowVodCategories';
import SortLiveChannel from './src/screens/SortLiveChannel';
import SportsGuide from './src/screens/SportsGuide';
import Theme from './src/screens/Theme';
import Trial from './src/screens/Trial';

import FoxImage from './src/images/fox.png';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [index, setIndex] = React.useState()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trial"
        headerMode="none">
        <Stack.Screen options={{ headerShown: false, }} name="Trial" component={Trial} />

        <Stack.Screen options={{ headerShown: false, }} name="LiveTV" component={LiveTV} />
        <Stack.Screen options={{ headerShown: false, }} name="Movies" component={Movies} />
        <Stack.Screen options={{ headerShown: false, }} name="Series" component={Series} />
        <Stack.Screen options={{ headerShown: false, }} name="SportsGuide" component={SportsGuide} />
        <Stack.Screen options={{ headerShown: false, }} name="Settings" component={Settings} />


        <Stack.Screen options={{ headerShown: false, }} name="AccountInformation" component={AccountInformation} />
        <Stack.Screen options={{ headerShown: false, }} name="Demo" component={Demo} />
        <Stack.Screen options={{ headerShown: false, }} name="DemoChannel" component={DemoChannel} />
        <Stack.Screen options={{ headerShown: false, }} name="Events" component={Events} />
        <Stack.Screen options={{ headerShown: false, }} name="Favorite" component={Favorite} />
        <Stack.Screen options={{ headerShown: false, }} name="LastScreen" component={LastScreen} />
        <Stack.Screen options={{ headerShown: false, }} name="ParentalControl" component={ParentalControl} />
        <Stack.Screen options={{ headerShown: false, }} name="ProgressBar" component={ProgressBar} />
        <Stack.Screen options={{ headerShown: false, }} name="RecentlyViewed" component={RecentlyViewed} />
        <Stack.Screen options={{ headerShown: false, }} name="ShowLiveCategories" component={ShowLiveCategories} />
        <Stack.Screen options={{ headerShown: false, }} name="ShowSeriesCategories" component={ShowSeriesCategories} />
        <Stack.Screen options={{ headerShown: false, }} name="ShowVodCategories" component={ShowVodCategories} />
        <Stack.Screen options={{ headerShown: false, }} name="SortLiveChannel" component={SortLiveChannel} />
        <Stack.Screen options={{ headerShown: false, }} name="Theme" component={Theme} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
