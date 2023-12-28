import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function ProfitMargin() {
  const [revenueAmount, setRevenueAmount] = useState('');
  const [revenueOption, setRevenueOption] = useState('monthly');
  const [expenesePercentage, setExpenesePercentage] = useState('');
  const [expeneseOption, setExpeneseOption] = useState('fixed');

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
    if (revenueOption === 'daily') {
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
      if (revenueOption === 'daily') {
        return expenesePercentage * 365;
      } else if (revenueOption === 'monthly') {
        return expenesePercentage * 12;
      } else if (revenueOption === 'yearly') {
        return expenesePercentage;
      } else {
        return 0;
      }
    } else if (expeneseOption === 'percentage') {
      if (revenueOption === 'daily') {
        return revenueAmount * (expenesePercentage / 100) * 365;
      } else if (revenueOption === 'monthly') {
        return revenueAmount * (expenesePercentage / 100) * 12;
      } else if (revenueOption === 'yearly') {
        return revenueAmount * (expenesePercentage / 100);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  
  const anuualProfit = anuualRevenue() - anuualExpense();
  const profitMargin = (anuualProfit / anuualRevenue()) * 100 || 0;

  const round2Decimal = (number) => {
    return Math.round(number * 100) / 100;
  }
  
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>{revenueOption.toUpperCase()} REVENUE</Text>
        <Input textLabel={'Amount'} onChange={setRevenueAmount} value={revenueAmount} placeholder={"0"} />
        <Dropdown textLabel={'Option'} onChange={setRevenueOption} value={revenueOption} itemsList={revenueOptionItems} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>{revenueOption.toUpperCase()} EXPENSES</Text>
        <Input textLabel={expeneseOption === 'fixed' ? 'Amount' : 'Percentage'} onChange={setExpenesePercentage} value={expenesePercentage} placeholder={"0"} postfix={expeneseOption === 'fixed' ? '$' : '%'} />
        <Dropdown textLabel={'Option'} onChange={setExpeneseOption} value={expeneseOption} itemsList={expenseOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={'Annual Revenue'} value={anuualRevenue()} prefix={'$'} postfix={''} />
        <Output textLabel={'Annual Expense'} value={anuualExpense()} prefix={'$'} postfix={''} />
        <Output textLabel={'Annual Profit'} value={anuualProfit} prefix={'$'} postfix={''} />
        <Output textLabel={'Profit Margin'} value={profitMargin} prefix={''} postfix={'%'} />
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