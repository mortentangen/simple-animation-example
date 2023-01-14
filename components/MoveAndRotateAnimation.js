import React, { useCallback, useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const MoveAndRotateAnimation = () => {

    // initialiser verdier. Bruker useRef så de kun initialiseres ved opprettelse.
    const animationValue = useRef(new Animated.Value(0)).current;
    const rotationValue = useRef(animationValue.interpolate({ // <-- Lagt til fra forrige eksempel
        inputRange: [-100, 100],
        outputRange: ['0deg', '360deg']
    })).current;

    const moveBoxLeft = useCallback(() => {
        Animated.timing(animationValue, {
            toValue: -100,
            duration: 500,
        }).start();
    }, []);

    const moveBoxRight = useCallback(() => {
        Animated.timing(animationValue, {
            toValue: 100,
            duration: 500,
        }).start();
    }, []);

    const boxStyle = {
        transform: [
            { translateX: animationValue },
            { rotate: rotationValue } // <-- Lagt til fra forrige eksempel
        ],
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, boxStyle]} />
            <View style={styles.buttonsContainer}>
                <Button title="<--" onPress={moveBoxLeft} />
                <Button title="-->" onPress={moveBoxRight} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default MoveAndRotateAnimation;
