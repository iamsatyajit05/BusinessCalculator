import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Home from './App/Home';
import BusinessValuation from './App/BusinessValuation';
import ProfitMargin from './App/ProfitMargin';
import GrossMargin from './App/GrossMargin';
import VAT from './App/VAT';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#142f44',
        },
        headerTintColor: '#fff'
      }}
      >
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerTitle: 'Margin Calculator'
        }} />
        <Stack.Screen name="Business Valuation Calculator" component={BusinessValuation}
        // options={{
        //   headerRight: () => (
        //     <Button
        //       onPress={() => {
        //         // Access the function from the screen component
        //         navigation.setParams({ resetFunction: () => setSomeState('Reset Value') });
        //       }}
        //       title="Custom Button"
        //     />
        //   ),
        // }} 
        />
        <Stack.Screen name="Profit Margin Calculator" component={ProfitMargin} />
        <Stack.Screen name="Gross Margin Calculator" component={GrossMargin} />
        <Stack.Screen name="VAT Calculator" component={VAT} />
      </Stack.Navigator>
      <StatusBar style="light" backgroundColor="#142f44" />
    </NavigationContainer>
  );
}

export default App;
