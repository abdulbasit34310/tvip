import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackgroundImage from "../images/imagebackground.png";
import SettingIcon from '../images/settings.png';

import NavigationBar from '../components/navigationBar';

export default function ShowVodCategories({ navigation, route }) {
  const [checked, setChecked] = React.useState('first');
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar style="hide" />
      <NavigationBar />

      <View style={{ marginHorizontal: 70, marginVertical: 44, }}>

        <View style={{ backgroundColor: '#B74424' }}>
          <View style={{ padding: 14, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={SettingIcon}></Image>
            <Text style={{ color: '#FFFFFF', marginLeft: 9, fontSize: 16 }}>Settings Show Vod Categories</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#4F4F4F', width: '100%', height: 25, justifyContent: 'center', }}>
          <Text style={{ color: 'white', alignSelf: 'center' }}>Select the categories you want to show</Text>
        </View>
        
        <View style={{ backgroundColor: '#4E4E4E80', height: '70%', paddingHorizontal: 35, paddingVertical: 35, }}>

          <View>
            <View style={{ flexDirection: 'row', }}>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '25%' }}>
                <View style={{ backgroundColor: '#4F4F4F', width: '95%', height: 20 }}></View>
                <View style={{ backgroundColor: '#4F4F4F', width: '95%', height: 25 }}></View>
              </View>

              <View style={{ backgroundColor: '#4F4F4F', width: '75%', height: 50 }}></View>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <View style={{ width: 151, height: 33, alignSelf: 'center', }}>
              <TouchableOpacity style={{ backgroundColor: 'black', paddingVertical: 8, paddingHorizontal: 66 }}><Text style={{ color: 'white' }}>OK</Text></TouchableOpacity>
            </View>

            <View style={{ width: 151, height: 33, alignSelf: 'center', }}>
              <TouchableOpacity style={{ backgroundColor: 'black', paddingVertical: 8, paddingHorizontal: 66 }}><Text style={{ color: 'white' }}>Show All</Text></TouchableOpacity>
            </View>

            <View style={{ width: 151, height: 33, alignSelf: 'center', }}>
              <TouchableOpacity style={{ backgroundColor: 'black', paddingVertical: 8, paddingHorizontal: 66 }}><Text style={{ color: 'white' }}>Cancel</Text></TouchableOpacity>
            </View>
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
  }
});
