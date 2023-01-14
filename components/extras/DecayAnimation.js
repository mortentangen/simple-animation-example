import React, { useRef } from 'react';
import { View, Animated, TouchableWithoutFeedback } from 'react-native';

const DecayAnimation = () => {
    const animation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const startAnimation = (event) => {
        // Get the x and y position of where the user tapped the screen
        const { x, y } = event.nativeEvent.locationX;

        // Set the starting velocity of the animation based on the distance from the origin
        const velocity = { x: x - 0, y: y - 0 };

        // Start the decay animation
        Animated.decay(animation, {
            velocity,
            deceleration: 0.997,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyles = {
        transform: [
            { translateX: animation.x },
            { translateY: animation.y },
        ],
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[{ width: 200, height: 200, backgroundColor: 'red' }, animatedStyles]} />
            </TouchableWithoutFeedback>
        </View>
    );
};
export default DecayAnimation
