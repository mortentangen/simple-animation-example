import React, { useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const PanReanimated = () => {
    const animationValue = useSharedValue(0);

    const moveBoxLeft = useCallback(() => {
        animationValue.value = withTiming(-100, {
            duration: 500,
        });
    }, []);

    const moveBoxRight = useCallback(() => {
        animationValue.value = withTiming(100, {
            duration: 500,
        });
    }, []);

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animationValue.value }],
        };
    });

    const eventHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            animationValue.value = event.translationX;
        }
    });

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={eventHandler}>
                <Animated.View style={[styles.box, boxStyle]} />
            </PanGestureHandler>
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
        backgroundColor: 'red',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default PanReanimated;
