import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import NavigationBar from './navigationBar';

export default function sideBar({ navigation, route }) {
    return (
        <View>
            <View style={{ height: '15%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <NavigationBar />
            </View>

            <View style={{ backgroundColor: 'rgba(21, 21, 21, 0.5)', height: '85%', width: '100%', paddingHorizontal: 10, }}>
                <TouchableOpacity style={styles.toStyle} onPress={() => navigation.navigate('LiveTV')}>
                    <Text style={styles.textStyle}>Recently Viewed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toStyle} onPress={() => navigation.navigate('Favorite')}>
                    <Text style={styles.textStyle}>Favorite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toStyle} onPress={() => navigation.navigate('Demo')}>
                    <Text style={styles.textStyle}>DEMO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toStyle} onPress={() => navigation.navigate('Home')}>
                    <MaterialCommunityIcons name={'home'} size={22} color={'#AB4221'}  />
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
        height: '15%',
        justifyContent: 'center'
    }
});
