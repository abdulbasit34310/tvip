import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import BatmanImage from '../images/bat.png'
import BackgroundImage from '../images/imagebackground.png';
import SettingIcon from '../images/settings.png';
import { externalStyles } from "../Style";
import NavigationBar from '../components/navigationBar';

export default function Theme({ navigation, route }) {
    const [checked, setChecked] = React.useState('first');
    return (
        <ImageBackground source={BackgroundImage} style={styles.container}>
            <StatusBar style="hide" />
            <NavigationBar />
            <View style={{ marginHorizontal: 70, marginVertical: 44 }}>
                <View>

                    <View style={{ backgroundColor: '#B74424' }}>
                        <View style={{ padding: 14, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={SettingIcon}></Image>
                            <Text style={{ color: '#FFFFFF', marginLeft: 9, fontSize: 16 }}>Settings > Theme</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#4E4E4E80', height: '80%' }}>
                        <View style={{ marginHorizontal: 10, marginVertical: 35 }}>
                            <View style={[externalStyles.rowSB, { justifyContent: 'space-between' }]}>
                                <View>
                                    <Image source={BatmanImage} style={{ width: 110, height: 59, borderRadius: 5 }} />
                                    <View style={externalStyles.themeTitle}>
                                        <RadioButton
                                            color={'#B74424'}
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('first')}
                                        />
                                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Default</Text>
                                    </View>
                                </View>

                                <View>
                                    <Image source={BatmanImage} style={{ width: 110, height: 59, borderRadius: 5 }} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
                                        <RadioButton
                                            color={'#B74424'}
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('first')}
                                        />
                                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Default</Text>
                                    </View>
                                </View>

                                <View>
                                    <Image source={BatmanImage} style={{ width: 110, height: 59, borderRadius: 5 }} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
                                        <RadioButton
                                            color={'#B74424'}
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('first')}
                                        />
                                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Default</Text>
                                    </View>
                                </View>

                                <View>
                                    <Image source={BatmanImage} style={{ width: 110, height: 59, borderRadius: 5 }} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
                                        <RadioButton
                                            color={'#B74424'}
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('first')}
                                        />
                                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Default</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', width: 151, height: 31 }}>
                                    <Text style={[externalStyles.textStyle, { justifyContent: 'center', alignItems: 'center', }]}>
                                        OK</Text>
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
    }
});
