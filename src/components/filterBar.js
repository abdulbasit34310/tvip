import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function filterBar() {
    return (
        <View style={{ flexDirection: 'row-reverse' }}>
            <View style={{
                borderRadius: 5, margin: 12, backgroundColor: '#F4921F',
                justifyContent: 'space-between',
                flexDirection: 'row', alignItems: 'center',
                paddingHorizontal: 16, paddingVertical: 5,
                width: 109,
            }}>
                <Text style={styles.textStyle}>Filter</Text>
                <MaterialCommunityIcons name={'filter-variant'} color={'#FFFFFF'} size={20} />
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
