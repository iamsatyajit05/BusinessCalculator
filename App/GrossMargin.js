import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Input from './component/input';
import Dropdown from './component/dropdown';
import Output from './component/output';

export default function GrossMargin() {
  const [costAmount, setCostAmount] = useState('0');
  const [costOption, setCostOption] = useState('banana');
  const [marginPercentage, setMarginPercentage] = useState('0');
  const [marginOption, setMarginOption] = useState('banana');

  const costOptionItems = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]

  const marginOptionItems = [
    { label: 'Appleaa', value: 'apple' },
    { label: 'Bananaaa', value: 'banana' }
  ]

  const grossMargin = 20;
  const markup = 25;
  const gossProfit = 30;
  const revenue = 35;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>COSTS</Text>
        <Input textLabel={'Amount'} onChange={setCostAmount} value={costAmount} placeholder={"0"} />
        <Dropdown textLabel={'Option'} onChange={setCostOption} value={costOption} itemsList={costOptionItems} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.containerLabel}>MARGIN PERCENT</Text>
        <Input textLabel={'Percentage'} onChange={setMarginPercentage} value={marginPercentage} placeholder={"0"} postfix={'%'} />
        <Dropdown textLabel={'Option'} onChange={setMarginOption} value={marginOption} itemsList={marginOptionItems} />
      </View>
      <Text style={styles.equalSign}>=</Text>
      <View style={styles.inputContainer}>
        <Output textLabel={'Gross Margin'} value={grossMargin} postfix={'%'} />
        <Output textLabel={'Markup'} value={markup} postfix={'%'} />
        <Output textLabel={'Gross Profit'} value={gossProfit} prefix={'$'} />
        <Output textLabel={'Revenue'} value={revenue} prefix={'$'} />
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