import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

export default function Index() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const router = useRouter();

    useEffect(() => {
        const initializeApp = async () => {
            // Ensures the splash screen is hides automatically
            await SplashScreen.hideAsync();

            // Start the fade-in animation for Melin logo
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }).start();

            // Navigate to `(tabs)/home` after 3 seconds
            setTimeout(() => {
                router.replace('(tabs)/home');
            }, 3000);
        };

        // Call the initializeApp function
        initializeApp();
    }, [fadeAnim, router]);

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
        width: 150,
        height: 150,
    },
});
