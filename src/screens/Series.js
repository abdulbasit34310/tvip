import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import FilterBar from '../components/filterBar';
import SearchBar from '../components/searchBar';
import SideBar from '../components/sideBar';
import EliteImage from '../images/elite.png';
import BackgroundImage from "../images/imagebackground.png";

export default function Series({ navigation, route }) {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar style="hide" />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '20%' }}>
          <SideBar navigation={navigation} />
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

            <ScrollView style={{ backgroundColor: '#4E4E4E80', height: '55%', padding: "4%" }}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '3%', }}>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '3%', }}>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>
              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '3%', }}>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>

                <View style={{ backgroundColor: 'black', }}>
                  <Image source={EliteImage} style={styles.imageStyle}></Image>
                  <View>
                    <Text style={styles.titleStyle}> Umbrella</Text>
                  </View>
                </View>
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
  }
});
