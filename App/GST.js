import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function GST() {
  const [amount, setAmount] = useState('');
  const [gstOption, setGstOption] = useState('inclusive');
  const [gstPercentage, setGstPercentage] = useState('');

  const gstOptionItems = [
    { label: 'Add GST', value: 'inclusive' },
    { label: 'GST Inclusive', value: 'exclusive' }
  ]

  const taxAmount = amount * (gstPercentage / 100) || 0;
  const finalAmount = parseFloat(amount) + parseFloat(taxAmount) || 0;
  const originalAmount = parseInt(amount) / (1 + (parseInt(gstPercentage) / 100)) || 0;
  const exclusiveAmount = parseInt(amount) - originalAmount || 0;
  
  return (
    <View>
      <View style={styles.inputContainer}>
        <Input textLabel={'Amount'} onChange={setAmount} value={amount} placeholder={"Enter Amount"} />
        <Input textLabel={'GST'} onChange={setGstPercentage} value={gstPercentage} placeholder={"Enter Percentage"} postfix={'%'} />
        <Dropdown textLabel={'Option'} onChange={setGstOption} value={gstOption} itemsList={gstOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={gstOption === 'inclusive' ? 'Amount (incl GST)' : 'Amount (excl GST)'} value={gstOption === 'inclusive' ? finalAmount : originalAmount} prefix={'$'} postfix={''} />
        <Output textLabel={'GST Amount'} value={gstOption === 'inclusive' ? taxAmount : exclusiveAmount} prefix={'$'} postfix={''} />
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