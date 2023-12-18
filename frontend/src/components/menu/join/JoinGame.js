import { View, Text, Button, TextInput, SafeAreaView } from 'react-native';
import styles from './JoinGameStyles';
import { useState } from 'react';

export default function JoinGame ({ navigation }) {

    const [code, setCode] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Join Game</Text>
            {!code ? (
                <View>
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Code:</Text>
                        <TextInput onChangeText={setCode} style={styles.input} />
                    </View>
                    <Button 
                        title='Join'
                        style={styles.joinButton}
                    />
                </View>
            ) : (
                <Text>{code}</Text>
            )}
            <Button title='Back' onPress={() => navigation.pop()} />
        </SafeAreaView>
    );
}