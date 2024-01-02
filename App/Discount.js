import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './component/input';
import Output from './component/output';

export default function Discount() {
  const [amount, setAmount] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');

  const discount = (parseInt(amount) * (parseInt(discountPercentage) / 100)) || 0;
  const finalAmount = parseInt(amount) - parseInt(discount) || 0;
  
  return (
    <View>
      <View style={styles.inputContainer}>
        <Input textLabel={'Amount'} onChange={setAmount} value={amount} placeholder={"Enter Amount"} />
        <Input textLabel={'Discount'} onChange={setDiscountPercentage} value={discountPercentage} placeholder={"Enter Percentage"} postfix={'%'} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={'Final Amount'} value={finalAmount} prefix={'$'} postfix={''} />
        <Output textLabel={'Discount'} value={discount} prefix={'$'} postfix={''} />
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