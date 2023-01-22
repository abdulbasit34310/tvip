import { Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SearchBar from '../components/searchBar';
import SideBar2 from '../components/sideBar2';
import AnimalPlanet from '../images/animalplanet.png';
import Heart from '../images/heart.png';
import BackgroundImage from "../images/imagebackground.png";

export default function LiveTV({ navigation, route }) {
    const [isHearted, setIsHearted] = useState(false);
    const lastTap = useRef(0);
    const isAnimating = useRef(false);
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isHearted) {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => (isAnimating.current = false));
        } else {
            animatedValue.setValue(0);
            isAnimating.current = false;
        }
    }, [animatedValue, isHearted]);

    const heartAnimation = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 0.1, 0.8, 1],
                    outputRange: [0, 2, 2, 1],
                }),
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 0.1, 0.8, 1],
                    outputRange: [0, -40, -40, 1],
                }),
            },
        ],
    };
    const heartCircleAnimation = {
        opacity: animatedValue,
    };

    return (
        <ImageBackground source={BackgroundImage} style={styles.container}>
            <StatusBar style="hide" />
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '20%' }}>
                        <SideBar2 navigation={navigation} />
                    </View>

                    <View style={{ width: '80%', }}>
                        <View style={{ height: '15%' }}>
                            <SearchBar />
                        </View>
                        <View style={{ height: '85%', padding: 20 }}>

                            <View style={{ backgroundColor: 'rgba(139, 139, 139, 0.4)', flexDirection: 'row', height: 42, width: '100%', borderRadius: 5 }}>

                                <View style={{
                                    backgroundColor: '#AB4221', height: '100%', width: 40, justifyContent: 'center',
                                    alignItems: 'center', borderRadius: 5
                                }}>
                                    <Text style={styles.textStyle}>1</Text>
                                </View>

                                <TouchableOpacity onPress={() => {navigation.push("DemoChannel")}}>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        alignItems: 'center', paddingHorizontal: 13, paddingVertical: 5
                                    }}>

                                        <Image source={AnimalPlanet} />
                                        <Text style={[styles.textStyle, { marginLeft: 15 }]}>Animal Planet</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.toHeart}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            const now = Date.now();
                                            const DELAY = 300;
                                            if (!isAnimating.current) {
                                                setIsHearted(!isHearted);
                                                isAnimating.current = true;
                                            }
                                        }}>
                                        <Octicons name={'heart'} size={22} color={'#858585'} />
                                        {isHearted && (
                                            <View style={styles.heartContainer}>
                                                <Animated.View style={[styles.heartCircle, heartCircleAnimation]} />
                                                <Animated.Image
                                                    style={[styles.heartIcon, heartAnimation]}
                                                    source={Heart}
                                                />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                </View>

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
    }, textStyle: {
        color: 'white',
    },
    toHeart: {
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    heartContainer: {
        position: 'absolute',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartCircle: {
        width: 38,
        height: 38,
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOpacity: 1,
                shadowRadius: 1,
                shadowOffset: {
                    width: 0.5,
                    height: 0.5,
                },
            },
        }),
    },
    heartIcon: {
        position: 'absolute',
        width: 24,
        height: 24,
    },
});
