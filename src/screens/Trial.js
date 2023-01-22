import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Components
import { externalStyles } from "../Style";

// Images Imports
import BackgroundImage from "../images/imagebackground.png";
import Main from '../images/mainlogo.png';

export default function Trial({ navigation, route }) {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar hidden />

      <View style={styles.logo}>
        <Image source={Main} />
      </View>

      <View style={{ height: '40%', width: 675, justifyContent: 'flex-end', paddingTop: 60 }}>

        <View style={{ backgroundColor: '#B3232B', paddingVertical: 5, alignItems: 'center' }}>
          <Text style={externalStyles.textStyle}>Trial...</Text>
        </View>

        <View style={{ backgroundColor: 'rgba(23, 23, 23, 0.8)', height: '100%', padding: 20 }}>

          <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
            <Text style={[externalStyles.textStyle, { marginRight: 33 }]}>
              Using the following MAC Address  to upload your playlist
            </Text>

            <Text style={{ backgroundColor: '#FF8845', color: 'white', paddingHorizontal: 34, paddingVertical: 4 }}>44:52:G6:9F:75:T9</Text>
          </View>

          <View>
            <Text style={{ color: '#F89942', alignSelf: 'center', }}>www. tvipsmartplayer.com</Text>

            <View style={{ flexDirection: 'row-reverse' }}>
              <TouchableOpacity
                onPress={() => { navigation.push("Home") }}>
                <Text style={{ backgroundColor: '#FF8845', color: 'white', paddingHorizontal: 15, paddingVertical: 4, }}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#FFFFFF',
  },
  logo: {
    backgroundColor: 'rgba(204, 204, 204, 0.3)',
    alignItems: 'center',
    width: 381,
    padding: 10,
  }
});
