import { View, Text, Button, SafeAreaView } from 'react-native';
import styles from './HomeStyles';

export default function Menu ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Barn Tower Defense</Text>
            <View>
                <Button title='Create new game' onPress={() => navigation.navigate('CreateGame')} />
                <Button title='Join game' onPress={() => navigation.navigate('JoinGame')} />
            </View>
            <Text></Text>
        </SafeAreaView>
    );
}