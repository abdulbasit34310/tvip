import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BaseballImage from '../images/baseball.png';
import MovieImage from '../images/movie.png';
import SeriesImage from '../images/reel.png';
import RotateRightImage from '../images/rr.png';
import SettingIcon from '../images/settings.png';
import TVImage from '../images/tv.png';
import TVIP from '../images/tvip_logo.png';


export default function sideBar({ navigation, route }) {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ height: '20%', paddingTop: 5, paddingLeft: 10 }}>
                <Image source={TVIP}></Image>
            </View>

            <View style={{ backgroundColor: 'rgba(21, 21, 21, 0.5)', height: '80%', width: '100%', paddingHorizontal: 10, }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("LiveTV")} style={styles.customDivider}><Image source={TVImage}></Image><Text style={styles.textStyle}>Live TV</Text></TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Movies")} style={styles.customDivider}><Image source={MovieImage}></Image><Text style={styles.textStyle}>Movies</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Series")} style={styles.customDivider}><Image source={SeriesImage}></Image><Text style={styles.textStyle}>Series</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("SportsGuide")} style={styles.customDivider}><Image source={BaseballImage}></Image><Text style={styles.textStyle}>Sports Guide</Text></TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.customDivider}><Image source={SettingIcon}></Image><Text style={styles.textStyle}>Settings</Text></TouchableOpacity></View>
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
