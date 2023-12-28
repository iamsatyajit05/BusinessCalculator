import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg";
import * as Clipboard from 'expo-clipboard';

export default function Output({ textLabel, value, prefix, postfix }) {
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(value.toString());
        // ToastAndroid.show(`${prefix}${value}${postfix} copied to clipboard!`, ToastAndroid.SHORT);
    }

    const round2Decimal = (number) => {
        return Math.round(number * 100) / 100;
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
                <Text style={styles.searchLabel}>{textLabel}</Text>
                <Text style={styles.input}>{prefix}{round2Decimal(value)}{postfix}</Text>
            </View>
            <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
                <Svg
                    width={30}
                    height={30}
                    viewBox="0 0 448 512"
                    style={{ opacity: 0.9 }}
                >
                    <Path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" fill="#142f44" />
                </Svg>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    searchSection: {
        flex: 1,
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
        fontWeight: '900',
        textAlign: 'right',
        flex: 1,
        fontSize: 18,
        color: '#142f44'
    },
    copyButton: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        backgroundColor: 'white',
        height: 60,
        width: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});