import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';

import SettingIcon from './src/images/settings.png';
import FoxImage from "./src/images/fox.png";
import TVImage from './src/images/tv.png';
import SideBar2 from './src/components/sideBar2';

export default function App() {
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
