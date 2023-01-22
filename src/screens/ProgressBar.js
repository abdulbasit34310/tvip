import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

import BackgroundImage from "../images/imagebackground.png";
import Main from '../images/mainlogo.png';

export default function ProgressBar({ navigation, route }) {
  const [index, setIndex] = React.useState(0);
  const [indeterminate, setIndeterminate] = React.useState(true);

  const load = () => {
    let progress = 0;
    setIndex(progress);
    setTimeout(() => {
      setIndeterminate(false);
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setIndex(progress);
      }, 500);
    }, 1500);
  };

  React.useEffect(() => {
    load();
  }, []);

  React.useEffect(() => {
    if (index > 0.9) {
    }
  }, [index]);

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar hidden />
      <View style={{ backgroundColor: 'rgba(204, 204, 204, 0.3)', alignItems: 'center', width: 381, padding: 10, position: 'absolute', left: 175, top: 85 }}>
        <Image source={Main} />
      </View>

      <View style={{ paddingHorizontal: 33, position: 'absolute', top: 310, }}>
        <View style={styles.loadingView}>
          <Text style={styles.textStyle}>Loading...</Text>
          <Text style={styles.textStyle}>{Math.trunc(index * 100)}%</Text>
        </View>
        <Progress.Bar progress={index} width={675} color={'#FF8845'} unfilledColor={'#101010'} borderColor={'#101010'} animated={true} />
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
