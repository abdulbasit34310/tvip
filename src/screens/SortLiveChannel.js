import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import NavigationBar from '../components/navigationBar';
import BackgroundImage from "../images/imagebackground.png";
import SettingIcon from '../images/settings.png';

export default function SortLiveChannel({ navigation, route }) {
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
                            <Text style={{ color: '#FFFFFF', marginLeft: 9, fontSize: 16 }}>Settings  Sort Live Channel</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#4E4E4E80', height: '80%' }}>
                        <View style={{ marginHorizontal: 87, marginVertical: 35 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
                                <RadioButton
                                    color={'#B74424'}
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Default</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
                                <RadioButton
                                    color={'#B74424'}
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Sort by A-Z</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
                                <RadioButton
                                    color={'#B74424'}
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                />
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Sort By Z-A</Text>
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
