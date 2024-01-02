import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './component/input';
import Output from './component/output';

export default function SalesMargin() {
    const [costAmount, setCostAmount] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');

    const gossProfit = parseFloat(sellingPrice) - parseFloat(costAmount) || 0;
    const grossMargin = (gossProfit / parseFloat(sellingPrice)) * 100 || 0;
    const markup = (gossProfit / parseFloat(costAmount)) * 100 || 0;

    return (
        <View>
            <View style={styles.inputContainer}>
                {/* <Text style={styles.containerLabel}>COSTS</Text> */}
                <Input textLabel={'Cost of Production'} onChange={setCostAmount} value={costAmount} placeholder={"0"} />
                <Input textLabel={'Selling Price'} onChange={setSellingPrice} value={sellingPrice} placeholder={"0"} />
            </View>
            {/* <View style={styles.inputContainer}>
                <Text style={styles.containerLabel}>MARGIN PERCENT</Text>
            </View> */}
            <Text style={styles.equalSign}>=</Text>
            <View style={styles.inputContainer}>
                <Output textLabel={'Gross Profit'} value={gossProfit} prefix={'$'} />
                <Output textLabel={'Gross Margin'} value={grossMargin} prefix={'$'} />
                <Output textLabel={'Markup'} value={markup} prefix={'$'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        margin: 12,
        gap: 10
    },
    containerLabel: {
        fontSize: 18,
        opacity: 0.7
    },
    equalSign: {
        fontSize: 24,
        textAlign: 'center'
    }
});