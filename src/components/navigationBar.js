import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
export default function navigationBar() {
    return (
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', }}>
            <TouchableOpacity>
                <Feather name={'chevron-left'} color={'#FCFCFC'} size={24}></Feather>
            </TouchableOpacity>
            <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 4 }}>Back</Text>
        </View>
    );
}