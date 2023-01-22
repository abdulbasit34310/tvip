import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SideBar from '../components/sideBar';
import BackgroundImage from "../images/imagebackground.png";
import LockImage from '../images/lock.png';
import MonitorImage from '../images/monitor.png';
import PlayerImage from '../images/player.png';
import SettingIcon from '../images/settings.png';

export default function Settings({ navigation, route }) {
    const [checked, setChecked] = React.useState('first');
    return (
        <ImageBackground source={BackgroundImage} style={styles.container}>
            <StatusBar style="hide" />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '20%' }}>
                    <SideBar navigation={navigation} />
                </View>

                <View style={{ width: '80%', paddingHorizontal: 15, paddingVertical: 20, justifyContent: 'center' }}>

                    <View style={{ backgroundColor: '#B74424' }}>
                        <View style={{ padding: 14, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={SettingIcon}></Image>
                            <Text style={{ color: '#FFFFFF', marginLeft: 9, fontSize: 16 }}>Settings</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#4E4E4E80', height: '70%', padding: "5%" }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '50%', }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('AccountInformation')}>
                                    <MaterialCommunityIcons name={'account-circle-outline'} color={'white'} size={26} />
                                    <Text style={styles.textStyle}>Account Information</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('ShowSeriesCategories')}>
                                    <Image source={MonitorImage}></Image>
                                    <Text style={styles.textStyle}>Show Series Catagories</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('ParentalControl')}>
                                    <Image source={LockImage}></Image>
                                    <Text style={styles.textStyle}>Parental Control</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('Theme')}>
                                    <AntDesign name={'areachart'} color={'white'} size={23} />
                                    <Text style={styles.textStyle}>Theme</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('ShowLiveCategories')}>
                                    <Image source={PlayerImage}></Image>
                                    <Text style={styles.textStyle}>Show Live Categories</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider}>
                                    <Ionicons name={'play-forward-outline'} color={'white'} size={23} />
                                    <Text style={styles.textStyle}>Select Playlist</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('ShowVodCategories')}>
                                    <MaterialCommunityIcons name={'filmstrip'} color={'white'} size={24} />
                                    <Text style={styles.textStyle}>Show Vod Categories</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={styles.customDivider} onPress={() => navigation.navigate('SortLiveChannel')}>
                                    <MaterialCommunityIcons name={'sort-alphabetical-ascending'} color={'white'} size={24} />
                                    <Text style={styles.textStyle}>Sort Live Channel</Text>
                                </TouchableOpacity>
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
        marginLeft: 15
    },
    customDivider: {
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

// <View> </View> <Text> </Text>
