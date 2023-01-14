import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SideBar2 from '../components/sideBar2';
import FoxImage from "../images/fox.png";
import SettingIcon from '../images/settings.png';
import TVImage from '../images/tv.png';

export default function DemoChannel({ navigation, route }) {
    return (
        <ImageBackground source={FoxImage} style={styles.container}>
            <StatusBar style="hide" />

            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: "80%" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '20%' }}>
                            <SideBar2 navigation={navigation} />
                        </View>

                        <View style={{ width: '80%', }}>
                        </View>
                    </View>
                </View>

                <View style={{ height: '20%', backgroundColor: 'rgba(0, 0, 0, 0.6)', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 35 }}>

                    <View style={styles.demoChannelStyle}>
                        <TouchableOpacity>
                            <Image source={TVImage} />
                        </TouchableOpacity>
                        <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 15 }}>Demo Channel</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={'volume-high'} size={26} color={'white'} />
                            <Slider
                                style={{ width: 110, height: 40 }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#DF3333"
                                maximumTrackTintColor="white"
                                step={.25}
                                thumbImage={SettingIcon}
                                thumbTintColor="#DF3333"
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(60, 60, 60, 0.8)', height: '85%', borderRadius: 10 }}>
                            <View style={[styles.navigationIconStyle, { borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }]}>
                                <Ionicons name={'chevron-back'} size={32} color={'white'} />
                            </View>
                            <Text style={{ paddingHorizontal: 8, color: 'white', fontSize: 16 }}>23     Channel</Text>
                            <View style={[styles.navigationIconStyle, { borderTopRightRadius: 10, borderBottomRightRadius: 10, }]}>
                                <Ionicons name={'chevron-forward'} size={32} color={'white'} />
                            </View>
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
    demoChannelStyle: {
        backgroundColor: 'rgba(171, 66, 33, 0.55)',
        width: 183,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationIconStyle: {
        backgroundColor: 'rgba(94, 94, 94, 0.5)',
        height: '100%',
        paddingHorizontal: 8,
        justifyContent: 'center'
    }
});
