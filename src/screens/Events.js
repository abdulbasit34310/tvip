import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import { externalStyles } from "../Style";

import NavigationBar from "../components/navigationBar";
import HorseImage from "../images/horse.png";
import BackgroundImage from "../images/imagebackground.png";

export default function Events({ navigation, route }) {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar hidden />
      <NavigationBar />
      <View style={{ backgroundColor: '#AB4221', width: '90%', height: '80%', alignSelf: 'center' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <View>
            <Text style={externalStyles.textStyle}>Events</Text>
          </View>
          <View style={{ backgroundColor: 'black', paddingHorizontal: 33, paddingVertical: 8, borderRadius: 10 }}>
            <Text style={[externalStyles.textStyle, { alignItems: 'space-between' }]}>Today, Thursday</Text>
          </View>
          <View>
            <Text style={externalStyles.textStyle}>
              sportsguide.com
            </Text>
            <Text style={externalStyles.textStyle}>
              29 Dec
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: 'rgba(78, 78, 78, 0.5)', padding: 10, height: '70%', marginHorizontal: 20 }}>
          <ScrollView>

            <View style={externalStyles.eventsEnteries}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', padding: 5
              }}>
                <Image source={HorseImage} style={{ width: 63, height: 50 }} />
                <View>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25 }]}>IMB Racing Leapards Town</Text>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25, fontSize: 12 }]}>Horse Racing</Text>
                </View>
              </View>

              <View>
                <Text style={[externalStyles.textStyle, { marginRight: 15, marginTop: 10 }]}>12:30 pm</Text>
              </View>
            </View>

            <View style={externalStyles.eventsEnteries}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', padding: 5
              }}>
                <Image source={HorseImage} style={{ width: 63, height: 50 }} />
                <View>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25 }]}>IMB Racing Leapards Town</Text>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25, fontSize: 12 }]}>Horse Racing</Text>
                </View>
              </View>

              <View>
                <Text style={[externalStyles.textStyle, { marginRight: 15, marginTop: 10 }]}>12:30 pm</Text>
              </View>
            </View>

            <View style={externalStyles.eventsEnteries}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', padding: 5
              }}>
                <Image source={HorseImage} style={{ width: 63, height: 50 }} />
                <View>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25 }]}>IMB Racing Leapards Town</Text>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25, fontSize: 12 }]}>Horse Racing</Text>
                </View>
              </View>

              <View>
                <Text style={[externalStyles.textStyle, { marginRight: 15, marginTop: 10 }]}>12:30 pm</Text>
              </View>
            </View>

            <View style={externalStyles.eventsEnteries}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', padding: 5
              }}>
                <Image source={HorseImage} style={{ width: 63, height: 50 }} />
                <View>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25 }]}>IMB Racing Leapards Town</Text>
                  <Text style={[externalStyles.textStyle, { marginLeft: 25, fontSize: 12 }]}>Horse Racing</Text>
                </View>
              </View>

              <View>
                <Text style={[externalStyles.textStyle, { marginRight: 15, marginTop: 10 }]}>12:30 pm</Text>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>

    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
});
