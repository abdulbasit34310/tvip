import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
export default function navigationBar({ navigation, route }) {
    return (
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', }}>
            <TouchableOpacity>
                <Feather name={'chevron-left'} color={'#FCFCFC'} size={24}></Feather>
            </TouchableOpacity>
            <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 4 }}>Back</Text>
        </View>
    );
}