import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function navigationBar() {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 10, }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Feather name={'chevron-left'} color={'#FCFCFC'} size={24}></Feather>
                <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 4 }}>Back</Text>
            </TouchableOpacity>

        </View>
    );
}