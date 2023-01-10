import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';

import Image1 from './src/images/series1.png';
import MonitorImage from './src/images/monitor.png';
import LockImage from './src/images/lock.png';
import BackgroundImage from "./src/images/imagebackground.png";
import SettingIcon from './src/images/settings.png';
import SideBar from './src/components/sideBar';
import SearchBar from './src/components/searchBar';
import FilterBar from './src/components/filterBar';



export default function App() {
  const [checked, setChecked] = React.useState('first');
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar style="hide" />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '20%' }}>
          <SideBar />
        </View>

        <View style={{ width: '80%', }}>
          <SearchBar />
          <FilterBar />

          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ backgroundColor: '#B74424' }}>
              <View style={{ padding: 14, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', marginLeft: 9, fontSize: 16 }}>Latest Series</Text>
              </View>
            </View>

            <ScrollView style={{ backgroundColor: '#4E4E4E80', height: '80%', padding: "5%" }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={Image1} ></Image>
              </View>
            </ScrollView>
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
    width: "23%",
    height: 75,
    margin: 5,
  },
  action: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  ti: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFFFFF',
  },
  customDivider: {
    width: '100%',
    paddingVertical: 10,

  }
});
