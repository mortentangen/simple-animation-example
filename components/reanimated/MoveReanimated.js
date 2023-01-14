import React, { useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const MoveReanimated = () => {

    const animationValue = useSharedValue(0);
    // const animationValue = useRef(new Animated.Value(0)).current;

    const moveBoxLeft = useCallback(() => {
        animationValue.value = withTiming(-100, {
            duration: 500,
        });
        // Animated.timing(animationValue, {
        //     toValue: -100,
        //     duration: 500,
        //     useNativeDriver: true,
        // }).start();
    }, []);

    const moveBoxRight = useCallback(() => {
        animationValue.value = withTiming(100, {
            duration: 500,
        });
        // Animated.timing(animationValue, {
        //     toValue: 100,
        //     duration: 500,
        //     useNativeDriver: true,
        // }).start();
    }, []);

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animationValue.value }],
        };
    });
    // const boxStyle = {
    //     transform: [{ translateX: animationValue }],
    // };

    return (
        <View style={styles.container}>
            {/* Animated.View kommer fra react-native-reanimated */}
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
        backgroundColor: 'red',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default MoveReanimated;
