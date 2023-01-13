import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';

import EliteImage from '../images/elite.png';
import ChannelImage from '../images/channelpic.png';
import BackgroundImage from "../images/imagebackground.png";
import SideBar from '../components/sideBar';
import SearchBar from '../components/searchBar';
import FilterBar from '../components/filterBar';

export default function LiveTV() {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar style="hide" />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '20%' }}>
          <SideBar />
        </View>

        <View style={{ width: '80%', }}>
          <SearchBar />
          <View style={{ paddingHorizontal: 15, paddingBottom: 125 }}>
            <ScrollView>
              <View style={{ height: '20%' }}>
                <View style={styles.headingStyle}>
                  <Text style={styles.headingText}>Favourite Live TV</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', height: 80, borderRadius: 10, backgroundColor: 'rgba(78, 78, 78, 0.5)' }}>
                  <View style={[styles.navigationIconStyle, { borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }]}>
                    <Ionicons name={'chevron-back'} size={32} color={'white'} />
                  </View>

                  <ScrollView horizontal style={{}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '18%', }}>
                      <Image source={ChannelImage} />
                      <Text style={{ color: 'white', paddingLeft: 15 }}>HBO</Text>
                    </View>
                  </ScrollView>

                  <View style={[styles.navigationIconStyle, { borderTopRightRadius: 10, borderBottomRightRadius: 10, }]}>
                    <Ionicons name={'chevron-forward'} size={32} color={'white'} />
                  </View>
                </View>
              </View>

              <View style={{ paddingTop: 10, height: '40%' }}>
                <View style={styles.headingStyle}>
                  <Text style={styles.headingText}>Latest Movies</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 180, borderRadius: 10, backgroundColor: 'rgba(78, 78, 78, 0.5)' }}>

                  <View style={[styles.navigationIconStyle, { borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }]}>
                    <Ionicons name={'chevron-back'} size={32} color={'white'} />
                  </View>

                  <ScrollView horizontal style={{}}>

                    <View style={{ backgroundColor: 'black', marginRight: 4, }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>

                    <View style={{ backgroundColor: 'black', marginRight: 4, }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>

                    <View style={{ backgroundColor: 'black', marginRight: 4, }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>

                    <View style={{ backgroundColor: 'black', marginRight: 4, }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>

                  </ScrollView>
                  <View style={[styles.navigationIconStyle, { borderTopRightRadius: 10, borderBottomRightRadius: 10, }]}>
                    <Ionicons name={'chevron-forward'} size={32} color={'white'} />
                  </View>
                </View>
              </View>

              <View style={{ paddingTop: 10, height: '40%' }}>
                <View style={styles.headingStyle}>
                  <Text style={styles.headingText}>Latest Series</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', height: 180, borderRadius: 10, backgroundColor: 'rgba(78, 78, 78, 0.5)' }}>

                  <View style={[styles.navigationIconStyle, { borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }]}>
                    <Ionicons name={'chevron-back'} size={32} color={'white'} />
                  </View>

                  <ScrollView horizontal>
                    <View style={{
                      backgroundColor: 'black', marginRight: 4, borderRadius: 9, width: 116,
                      height: 157,
                    }}>
                      <Image source={EliteImage} ></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>
                    <View style={{
                      backgroundColor: 'black', marginRight: 4, borderRadius: 9, width: 116,
                      height: 157,
                    }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>
                    <View style={{
                      backgroundColor: 'black', marginRight: 4, borderRadius: 9, width: 116,
                      height: 157,
                    }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>
                    <View style={{
                      backgroundColor: 'black', marginRight: 4, borderRadius: 9, width: 116,
                      height: 157,
                    }}>
                      <Image source={EliteImage}></Image>
                      <View>
                        <Text style={styles.titleStyle}>Elite</Text>
                      </View>
                    </View>


                  </ScrollView>
                  <View style={[styles.navigationIconStyle, { borderTopRightRadius: 10, borderBottomRightRadius: 10, }]}>
                    <Ionicons name={'chevron-forward'} size={32} color={'white'} />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', marginRight: 4,
  },
  headingStyle: { backgroundColor: '#B74424', paddingHorizontal: 15, paddingVertical: 3, flexDirection: 'row', alignItems: 'center', borderRadius: 5, height: 28 },
  headingText: { color: '#FFFFFF', marginLeft: 9, fontSize: 14 },
  iconStyle: {
    position: 'absolute',
    left: '4.42%',
    right: '93.8%',
    top: '1.93%',
    bottom: '96.67%',
  },
  imageStyle: {
    width: 116,
    height: 106,
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

  },
  navigationIconStyle: {
    paddingHorizontal: 4,
    justifyContent: 'center'
  }, imageStyle: {
    width: 50,
    height: 50,
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
    fontSize: 14,
    alignSelf: 'center',
    paddingVertical: 15
  }
});
