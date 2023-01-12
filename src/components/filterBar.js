import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome5Brands, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Button, Dimensions, FlatList, ImageBackground, Image, ImageScrollView, idboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function filterBar() {
    const data = [
        { id: '1', name: 'Action', },
        { id: '2', name: 'Dtrana' },
        { id: '3', name: 'Fantasy' },
        { id: '4', name: 'Horror', },
        { id: '5', name: 'Animated' },
        { id: '6', name: 'Thriller' },
        { id: '7', name: 'Comedy' },
    ]
    const [showOption, setShowOption] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }
    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }
    return (
        <View style={{ flexDirection: 'row-reverse' }}>
            <TouchableOpacity onPress={() => setShowOption(!showOption)} style={{
                borderRadius: 5, margin: 12, backgroundColor: '#F4921F',
                justifyContent: 'space-between',
                flexDirection: 'row', alignItems: 'center',
                paddingHorizontal: 16, paddingVertical: 5,
                width: 109,
            }}>
                <Text style={styles.textStyle}>Filter</Text>
                <MaterialCommunityIcons name={'filter-variant'} color={'#FFFFFF'} size={20} />
            </TouchableOpacity>

            {showOption && (<View style={{
                borderRadius: 5, margin: 12, backgroundColor: '#F4921F',
                justifyContent: 'space-between',
                flexDirection: 'row', alignItems: 'center',
                paddingHorizontal: 16, paddingVertical: 5,
                width: 109, position: 'absolute', zIndex: 1, top: 35
            }}>
                <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                    <View style={{ borderBottomColor: '#AB4221', borderBottomWidth: 1, width: '100%', paddingBottom: 3 }}>
                        <Text style={{ color: '#AB4221', alignSelf: 'center', }}>
                            Categories
                        </Text>
                    </View>
                    {data.map((val, i) => {
                        return (

                            <TouchableOpacity key={String(i)}
                                onPress={() => onSelectedItem(val)}
                                style={styles.selectedItemStyle} >
                                <Text style={{ color: '#FFFFFF', alignSelf: 'center' }}>{val.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>)}
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

    }, selectedItemStyle: {
        paddingVertical: 8,
        borderRadius: 4,
        paddingHorizontal: 6,
        marginBottom: 4
    },
    customDivider: {
        width: '100%',
        paddingVertical: 10,

    }
});
