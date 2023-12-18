import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 80,
    },
    title: {
        fontSize: 32
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    label: {
        minWidth: 50,
    },
    input: {
        minWidth: 100,
        borderColor: 'lightgrey',
        borderBottomWidth: 1
    },
    joinButton: {
        marginTop: 80,
    }
});

export default styles;