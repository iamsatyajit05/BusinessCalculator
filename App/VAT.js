import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function VAT() {
  const [amount, setAmount] = useState('0');
  const [vatOption, setVatOption] = useState('banana');
  const [vatPercentage, setVatPercentage] = useState('0');

  const vatOptionItems = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]

  const totalAmount = 20;
  const taxAmount = 20;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Input textLabel={'Amount'} onChange={setAmount} value={amount} placeholder={"0"} />
        <Input textLabel={'VAT'} onChange={setVatPercentage} value={vatPercentage} placeholder={"0"} postfix={'%'} />
        <Dropdown textLabel={'Option'} onChange={setVatOption} value={vatOption} itemsList={vatOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={'Total (excl VAT)'} value={totalAmount} prefix={'$'} postfix={''} />
        <Output textLabel={'Tax Amount'} value={taxAmount} prefix={'$'} postfix={''} />
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