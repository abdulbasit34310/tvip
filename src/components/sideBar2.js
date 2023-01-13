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

import NavigationBar from './navigationBar';

export default function sideBar() {
    return (
        <View>
            <View style={{ height: '15%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <NavigationBar />
            </View>

            <View style={{ backgroundColor: 'rgba(21, 21, 21, 0.5)', height: '85%', width: '100%', paddingHorizontal: 10, }}>
                <TouchableOpacity style={styles.toStyle}>
                    <Text style={styles.textStyle}>Recently Viewed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toStyle}>
                    <Text style={styles.textStyle}>Favorite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toStyle}>
                    <Text style={styles.textStyle}>DEMO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toStyle}>
                    <MaterialCommunityIcons name={'home'} size={28} color={'#AB4221'} />
                </TouchableOpacity>
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
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,

    },
    toStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#AB4221",
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
        height: '15%'
    }
});
