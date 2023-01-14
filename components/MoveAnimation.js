import React, { useCallback, useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const MoveAnimation = () => {

    // initialiser verdi. Bruker useRef så den kun initialiseres ved opprettelse.
    const animationValue = useRef(new Animated.Value(0)).current;

    // click handlere
    const moveBoxLeft = useCallback(() => {
        Animated.timing(animationValue, {
            toValue: -100,
            duration: 500,
            useNativeDriver: true, // <-- Husk denne!
        }).start();
    }, []);

    const moveBoxRight = useCallback(() => {
        Animated.timing(animationValue, {
            toValue: 100,
            duration: 500,
            useNativeDriver: true, // <-- Husk denne!
        }).start();
    }, []);

    const boxStyle = {
        transform: [{ translateX: animationValue }],
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

export default MoveAnimation;
