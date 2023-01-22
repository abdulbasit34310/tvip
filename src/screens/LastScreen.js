import { Feather, Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { externalStyles } from "../Style";

import NavigationBar from "../components/navigationBar";
import BackgroundImage from "../images/imagebackground.png";
import TVImage from '../images/tv.png';

export default function LastScreen({ navigation, route }) {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar hidden />
      <View style={[externalStyles.rowSB, { justifyContent: 'space-between', marginRight: 10 }]}>
        <NavigationBar />
        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => { navigation.popToTop(); navigation.navigate('Home'); }}>
          <MaterialIcons name={'home'} color={'#AB4221'} size={24} />
        </TouchableOpacity>
      </View>

      <View style={{ height: '70%', width: '90%', alignSelf: 'center' }}>

        <View style={styles.topTabStyle}>
          <Image source={TVImage} />
          <TouchableOpacity>
            <MaterialCommunityIcons name={'heart'} color={'white'} size={22} /></TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name={'filter-variant'} color={'#FFFFFF'} size={24} /></TouchableOpacity>
          <TouchableOpacity>
            <Feather name={'calendar'} color={'#FFFFFF'} size={21} /></TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name={'search'} color={'#FFFFFF'} size={24} /></TouchableOpacity>
          <TouchableOpacity>
            <Foundation name={'list'} color={'#FFFFFF'} size={22} /></TouchableOpacity>

        </View>


        <View style={{ backgroundColor: '#202020', padding: 10, marginHorizontal: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[externalStyles.rowSB, { height: 100, marginBottom: 10, }]}>

              <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, width: 63 }}>

              </View>

              <View style={{ width: 80, flexDirection: 'column', marginHorizontal: 10 }}>

                <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, height: 23, marginBottom: 7 }}>

                </View>

                <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, height: 70 }}>
                </View>

              </View>

              <View style={{ backgroundColor: '#5A5A5A', width: 484, borderRadius: 5 }}>

              </View>

            </View>

            <View style={[externalStyles.rowSB, { height: 100, marginBottom: 10 }]}>

              <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, width: 63 }}>

              </View>

              <View style={{ width: 80, flexDirection: 'column', marginHorizontal: 10 }}>

                <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, height: 23, marginBottom: 7 }}>

                </View>

                <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, height: 70 }}>
                </View>

              </View>

              <View style={{ backgroundColor: '#5A5A5A', width: 484, borderRadius: 5 }}>

              </View>

            </View>

            <View style={[externalStyles.rowSB, { height: 100, marginBottom: 10 }]}>

              <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, width: 63 }}>

              </View>

              <View style={{ width: 80, flexDirection: 'column', marginHorizontal: 10 }}>

                <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, height: 23, marginBottom: 7 }}>

                </View>

                <View style={{ backgroundColor: '#5A5A5A', borderRadius: 5, height: 70 }}>
                </View>

              </View>

              <View style={{ backgroundColor: '#5A5A5A', width: 484, borderRadius: 5 }}>

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
  }, topTabStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#AB4221',
    borderBottomEndRadius: 2,
    backgroundColor: 'black',
    width: '90%',
    alignSelf: 'center'
  }
});
