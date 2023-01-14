import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
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



const Stack = createNativeStackNavigator();

export default function App() {
  // const [index, setIndex] = React.useState();
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((index + 1) % (10 + 1));
  //   }, 500);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [index]);

  return (
    <ImageBackground source={FoxImage} style={styles.container}>
      <StatusBar style="hide" />

      <View style={{ flexDirection: 'column' }}>
        <View style={{ height: "80%" }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '20%' }}>
              <SideBar2 />
            </View>

            <View style={{ width: '80%', }}>
            </View>
          </View>
        </View>

        <View style={{ height: '20%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>

          <View style={styles.demoChannelStyle}>
            <TouchableOpacity>
              <Image source={TVImage} />
            </TouchableOpacity>
            <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 4 }}>Demo Channel</Text>
          </View>

          <View style={{}}>

          </View>

        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  iconStyle: {
    position: 'absolute',
    left: '4.42%',
    right: '93.8%',
    top: '1.93%',
    bottom: '96.67%',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  action: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  ti: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customDivider: {
    width: '100%',
    paddingVertical: 10,

  }, titleStyle: {
    color: '#FFFFFF',
    alignSelf: 'center',
    paddingVertical: 15
  },
  demoChannelStyle: {
    backgroundColor: 'rgba(171, 66, 33, 0.55)',
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
