import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input({ textLabel, onChange, value, placeholder, postfix }) {
    return (
        <View style={styles.searchSection}>
            <Text style={styles.searchLabel}>{textLabel}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType="numeric"
            />
            {postfix && <Text style={styles.searchLabel}>{postfix}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        height: 60,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        backgroundColor: 'white',
    },
    searchLabel: {
        fontSize: 18,
        fontWeight: '600'
    },
    input: {
        textAlign: 'right',
        flex: 1,
        fontSize: 18,
    },
});