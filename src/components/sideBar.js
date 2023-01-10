import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

import TVIP from '../images/tvip_logo.png';
import BatmanImage from '../images/bat.png';
import BikeImage from '../images/bike.png';
import BridgeImage from '../images/bridge.png';
import BaseballImage from '../images/baseball.png';
import MovieImage from '../images/movie.png';
import SeriesImage from '../images/reel.png';
import RotateRightImage from '../images/rr.png';
import TVImage from '../images/tv.png';
import BackgroundImage from "../images/imagebackground.png";
import SettingIcon from '../images/settings.png';


export default function sideBar() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ height: '20%' }}>
                <Image source={TVIP}></Image>
            </View>

            <View style={{ backgroundColor: 'rgba(21, 21, 21, 0.5)', height: '80%', width: '100%', paddingHorizontal: 10, }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.customDivider}><Image source={TVImage}></Image><Text style={styles.textStyle}>Live TV</Text></TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.customDivider}><Image source={MovieImage}></Image><Text style={styles.textStyle}>Movies</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.customDivider}><Image source={SeriesImage}></Image><Text style={styles.textStyle}>Series</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.customDivider}><Image source={BaseballImage}></Image><Text style={styles.textStyle}>Sports Guide</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.customDivider}><Image source={SettingIcon}></Image><Text style={styles.textStyle}>Settings</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.customDivider}><Image source={RotateRightImage}></Image><Text style={styles.textStyle}>Refresh Playlist</Text></TouchableOpacity></View>

            </View>
        </View>
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
    },
    action: {
        flexDirection: "row",
        paddingBottom: 15,
    },
    ti: {
        backgroundColor: '#D9D9D9',
        width: '55%',
        height: 23,
        marginLeft: 58,
        borderRadius: 2
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 5
    },
    customDivider: {
        borderBottomWidth: 1,
        borderBottomColor: "#AB4221",
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
    }
});
