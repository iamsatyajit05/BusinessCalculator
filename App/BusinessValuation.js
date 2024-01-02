import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function BusinessValuation() {
  const [revenueAmount, setRevenueAmount] = useState('');
  const [revenueOption, setRevenueOption] = useState('monthly');
  const [expenesePercentage, setExpenesePercentage] = useState('');
  const [expeneseOption, setExpeneseOption] = useState('fixed');
  const [multiplier, setMultiplier] = useState('5');

  const revenueOptionItems = [
    { label: 'Daily', value: 'daily' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' }
  ]

  const expenseOptionItems = [
    { label: 'Fixed', value: 'fixed' },
    { label: 'Percentage', value: 'percentage' }
  ]

  const anuualRevenue = () => {
    if (expeneseOption === 'daily') {
      return revenueAmount * 365;
    } else if (revenueOption === 'monthly') {
      return revenueAmount * 12;
    } else if (revenueOption === 'yearly') {
      return revenueAmount;
    } else {
      return 0;
    }
  }

  const anuualExpense = () => {
    if (expeneseOption === 'fixed') {
      return expenesePercentage;
    } else if (revenueOption === 'percentage') {
      return revenueAmount * (expenesePercentage / 100);
    } else {
      return 0;
    }
  }

  const annualProfit = (anuualRevenue() - anuualExpense());
  const valution = (anuualRevenue() - anuualExpense()) * multiplier;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>{revenueOption.toUpperCase()} REVENUE</Text>
        <Input textLabel={'Amount'} onChange={setRevenueAmount} value={revenueAmount} placeholder={"Enter Amount"} />
        <Dropdown textLabel={'Option'} onChange={setRevenueOption} value={revenueOption} itemsList={revenueOptionItems} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>{revenueOption.toUpperCase()} EXPENSES</Text>
        <Input textLabel={expeneseOption === 'fixed' ? 'Amount' : 'Percentage'} onChange={setExpenesePercentage} value={expenesePercentage} placeholder={expeneseOption === 'fixed' ? 'Enter Amount' : 'Enter Percentage'} postfix={expeneseOption === 'fixed' ? '$' : '%'} />
        <Dropdown textLabel={'Option'} onChange={setExpeneseOption} value={expeneseOption} itemsList={expenseOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Input textLabel={'Multiplier'} onChange={setMultiplier} value={multiplier} placeholder={"0"} postfix={'x'} />
        <Output textLabel={'Annual Profit'} value={annualProfit} prefix={'$'} postfix={''} />
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