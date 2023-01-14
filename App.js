import { StyleSheet, View } from 'react-native';
import MoveAnimation from './components/MoveAnimation';

const App = () => (
    <View style={styles.container}>
        <MoveAnimation />
    </View>
);
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
