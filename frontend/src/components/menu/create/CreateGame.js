import { View, Text, Button, TextInput } from 'react-native';
import styles from './CreateGameStyles';
import { useState } from 'react';

export default function CreateGame ({ navigation }) {

    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Game</Text>
            <View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput onChangeText={setName} style={styles.input} />
                </View>
                <Button 
                    title='Create'
                    style={styles.createButton}
                />
            </View>
            <Button title='Back' onPress={() => navigation.pop()} />
        </View>
    );
}