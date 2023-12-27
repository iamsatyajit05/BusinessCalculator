import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown({ textLabel, onChange, value, itemsList }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(itemsList);

    return (
        <View style={styles.searchSection}>
            <Text style={styles.searchLabel}>{textLabel}</Text>
            <DropDownPicker
                style={{ borderWidth: 0 }}
                containerStyle={{ width: 150 }}
                textStyle={{ textAlign: 'right', fontSize: 18 }}
                itemStyle={{ fontSize: 18 }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={onChange}
                setItems={setItems}
            />
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
        zIndex: 999
    },
    searchLabel: {
        fontSize: 18,
        fontWeight: '600'
    },
});