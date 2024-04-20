import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const initializeApp = async () => {
            // Await until the splash screen has finished loading
            await SplashScreen.preventAutoHideAsync();
            // Start the fade-in animation for the Melin logo
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000, 
                useNativeDriver: true,
            }).start();
            // Hide the splash screen once the animation begins
            await SplashScreen.hideAsync();
        };

        // Call the initializeApp function to initialize the app and handle the splash screen
        initializeApp();
    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/Melin_Logo.jpeg')}
                style={[styles.logo, { opacity: fadeAnim }]}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
});
