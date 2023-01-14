import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function sideBar() {
    return (
        <View style={{ paddingHorizontal: 90, paddingVertical: 10 }}>
            <View style={{ borderRadius: 12, backgroundColor: 'rgba(30, 30, 30, 0.8)', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 5 }}>
                <TextInput
                    style={styles.ti}
                    placeholder="Search"
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
