import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function ProfitMargin() {
  const [revenueAmount, setRevenueAmount] = useState('0');
  const [revenueOption, setRevenueOption] = useState('banana');
  const [expenesePercentage, setExpenesePercentage] = useState('0');
  const [expeneseOption, setExpeneseOption] = useState('banana');

  const revenueOptionItems = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]

  const expenseOptionItems = [
    { label: 'Appleaa', value: 'apple' },
    { label: 'Bananaaa', value: 'banana' }
  ]

  const anuualRevenue = 20;
  const anuualExpense = 25;
  const anuualProfit = 30;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>YEARLY REVENUE</Text>
        <Input textLabel={'Amount'} onChange={setRevenueAmount} value={revenueAmount} placeholder={"0"} />
        <Dropdown textLabel={'Option'} onChange={setRevenueOption} value={revenueOption} itemsList={revenueOptionItems} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>YEARLY EXPENSES ($)</Text>
        <Input textLabel={'Percentage'} onChange={setExpenesePercentage} value={expenesePercentage} placeholder={"0"} postfix={''} />
        <Dropdown textLabel={'Option'} onChange={setExpeneseOption} value={expeneseOption} itemsList={expenseOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={'Annual Revenue'} value={anuualRevenue} prefix={'$'} postfix={''} />
        <Output textLabel={'Annual Expense'} value={anuualExpense} prefix={'$'} postfix={''} />
        <Output textLabel={'Annual Profit'} value={anuualProfit} prefix={'$'} postfix={''} />
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