import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';

import Main from '../images/mainlogo.png';
import ChannelImage from '../images/channelpic.png';
import BackgroundImage from "../images/imagebackground.png";

export default function ProgressBar() {
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
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar hidden />
      <View style={{ backgroundColor: 'rgba(204, 204, 204, 0.3)', alignItems: 'center', width: 381, padding: 10, position: 'absolute', left: 175, top: 85 }}>
        <Image source={Main} />
      </View>

      <View style={{ paddingHorizontal: 33, position: 'absolute', top: 310, }}>
        <View style={styles.loadingView}>
          <Text style={styles.textStyle}>Loading...</Text>
          <Text style={styles.textStyle}>81%</Text>
        </View>
        <Progress.Bar progress={0.3} width={675} color={'#FF8845'} unfilledColor={'#101010'} borderColor={'#101010'} animated={true} />
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
