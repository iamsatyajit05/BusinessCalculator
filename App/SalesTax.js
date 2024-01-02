import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function SalesTax() {
  const [amount, setAmount] = useState('');
  const [vatOption, setVatOption] = useState('inclusive');
  const [vatPercentage, setVatPercentage] = useState('');

  const vatOptionItems = [
    { label: 'Add Sales Tax', value: 'inclusive' },
    { label: 'Sales Tax Inclusive', value: 'exclusive' }
  ]

  const taxAmount = amount * (vatPercentage / 100) || 0;
  const finalAmount = parseFloat(amount) + parseFloat(taxAmount) || 0;
  const originalAmount = parseInt(amount) / (1 + (parseInt(vatPercentage) / 100)) || 0;
  const exclusiveAmount = parseInt(amount) - originalAmount || 0;
  
  return (
    <View>
      <View style={styles.inputContainer}>
        <Input textLabel={'Amount'} onChange={setAmount} value={amount} placeholder={"Enter Amount"} />
        <Input textLabel={'Sales Tax'} onChange={setVatPercentage} value={vatPercentage} placeholder={"Enter Percentage"} postfix={'%'} />
        <Dropdown textLabel={'Option'} onChange={setVatOption} value={vatOption} itemsList={vatOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={vatOption === 'inclusive' ? 'Amount (incl Sales Tax)' : 'Amount (excl Sales VAT)'} value={vatOption === 'inclusive' ? finalAmount : originalAmount} prefix={'$'} postfix={''} />
        <Output textLabel={'Sales Tax Amount'} value={vatOption === 'inclusive' ? taxAmount : exclusiveAmount} prefix={'$'} postfix={''} />
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