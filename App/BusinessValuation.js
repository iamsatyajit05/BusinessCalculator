import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function BusinessValuation() {
  const [revenueAmount, setRevenueAmount] = useState('0');
  const [revenueOption, setRevenueOption] = useState('banana');
  const [expenesePercentage, setExpenesePercentage] = useState('0');
  const [expeneseOption, setExpeneseOption] = useState('banana');
  const [multiplier, setMultiplier] = useState('5');

  const revenueOptionItems = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]

  const expenseOptionItems = [
    { label: 'Appleaa', value: 'apple' },
    { label: 'Bananaaa', value: 'banana' }
  ]

  const anuualRevenue = 20;
  const valution = anuualRevenue * multiplier;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>MONTHLY REVENUE</Text>
        <Input textLabel={'Amount'} onChange={setRevenueAmount} value={revenueAmount} placeholder={"0"} />
        <Dropdown textLabel={'Option'} onChange={setRevenueOption} value={revenueOption} itemsList={revenueOptionItems} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>MONTHLY EXPENSES (%)</Text>
        <Input textLabel={'Percentage'} onChange={setExpenesePercentage} value={expenesePercentage} placeholder={"0"} postfix={'%'} />
        <Dropdown textLabel={'Option'} onChange={setExpeneseOption} value={expeneseOption} itemsList={expenseOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Input textLabel={'Multiplier'} onChange={setMultiplier} value={multiplier} placeholder={"0"} postfix={'x'} />
        <Output textLabel={'Annual Revenue'} value={anuualRevenue} prefix={'$'} postfix={''} />
        <Output textLabel={'Valution'} value={valution} prefix={'$'} postfix={''} />
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