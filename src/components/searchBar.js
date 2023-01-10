import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function sideBar() {
    return (
        <View style={{ paddingHorizontal: 90, paddingVertical: 10 }}>
            <View style={{ borderRadius: 12, backgroundColor: 'rgba(30, 30, 30, 0.8)', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 5 }}>
                <TextInput
                    style={styles.ti}
                    placeholder="Search Series"
                    placeholderTextColor="#5E5E5E"
                ></TextInput>
                <Fontisto name={'search'} color={'#5E5E5E'} size={20} />
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
        paddingBottom: 5,
    },
    ti: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 15,

    },
    customDivider: {
        width: '100%',
        paddingVertical: 10,

    }
});
