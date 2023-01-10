import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import BackgroundImage from "../images/imagebackground.png";
import SettingIcon from '../images/settings.png';
import BatmanImage from '../images/bat.png';
import BikeImage from '../images/bike.png';
import BridgeImage from '../images/bridge.png';

import NavigationBar from './src/components/navigationBar';

export default function ParentalControl() {
    const [checked, setChecked] = React.useState('first');
    return (
        <ImageBackground source={BackgroundImage} style={styles.container}>
            <StatusBar style="hide" />
            <NavigationBar />

            <View style={{ marginHorizontal: 70, marginVertical: 44, }}>

                <View style={{ backgroundColor: '#B74424' }}>
                    <View style={{ padding: 14, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={SettingIcon}></Image>
                        <Text style={{ color: '#FFFFFF', marginLeft: 9, fontSize: 16 }}>Settings v Parental Control</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#4E4E4E80', height: '78%', paddingHorizontal: 35, paddingVertical: 35, }}>
                    <View style={{ flex: 4 }}>

                        <View style={styles.action}>
                            <View style={{ width: '25%' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Password</Text>
                            </View>
                            <TextInput style={styles.ti}></TextInput>
                        </View>

                        <View style={styles.action}>
                            <View style={{ width: '25%' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>New Password</Text>
                            </View>
                            <TextInput style={styles.ti}></TextInput>
                        </View>

                        <View style={styles.action}>
                            <View style={{ width: '25%' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Confirm Password</Text>
                            </View>
                            <TextInput style={styles.ti}></TextInput>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 }}>
                        <View style={{ width: 151, height: 33, alignSelf: 'center', }}>
                            <TouchableOpacity style={{ backgroundColor: 'black', paddingVertical: 8, paddingHorizontal: 66 }}><Text style={{ color: 'white' }}>Done</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: 151, height: 33, alignSelf: 'center', }}>
                            <TouchableOpacity style={{ backgroundColor: 'black', paddingVertical: 8, paddingHorizontal: 66 }}><Text style={{ color: 'white' }}>Cancel</Text></TouchableOpacity>
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
    }
});
