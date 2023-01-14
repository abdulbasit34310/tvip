import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackgroundImage from "../images/imagebackground.png";
import Main from '../images/mainlogo.png';

export default function Trial({ navigation, route }) {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar hidden />
      <View style={{ backgroundColor: 'rgba(204, 204, 204, 0.3)', alignItems: 'center', width: 381, padding: 10, position: 'absolute', left: 175, top: 85 }}>
        <Image source={Main} />
      </View>

      <View style={{ position: 'absolute', width: '100%', top: 300, backgroundColor: 'rgba(23, 23, 23, 0.8)', height: 90, width: 675, alignSelf: 'center' }}>
        <View style={{ backgroundColor: '#B3232B', paddingVertical: 5, alignItems: 'center' }}>
          <Text style={styles.textStyle}>Trial...</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', marginRight: 33 }}>Using the following MAC Address  to upload your playlist</Text>
          <Text style={{ backgroundColor: '#FF8845', color: 'white', paddingHorizontal: 34, paddingVertical: 4 }}>44:52:G6:9F:75:T9</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#F89942', alignSelf: 'center', }}>www. tvipsmartplayer.com</Text>
          <TouchableOpacity onPress={navigation.navigate('LiveTV')}><Text style={{ backgroundColor: '#FF8845', color: 'white', paddingHorizontal: 15, paddingVertical: 4, }}>OK</Text></TouchableOpacity>
        </View>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }, textStyle: {
    color: '#FFFFFF',
  }, loadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
