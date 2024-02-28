import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const navigateToBusinessValuation = () => {
        navigation.navigate('Business Valuation Calculator');
    };

    const navigateToProfitMargin = () => {
        navigation.navigate('Profit Margin Calculator');
    };

    const navigateToGrossMargin = () => {
        navigation.navigate('Gross Margin Calculator');
    };

    const navigateToVAT = () => {
        navigation.navigate('VAT Calculator');
    };

    const navigateToNetProfitMargin = () => {
        console.log("Navigate to Net Profit Margin Calculator");
    };

    const navigateToSalesMargin = () => {
        navigation.navigate('Sales Margin Calculator');
    };

    const navigateToGST = () => {
        navigation.navigate('GST Calculator');
    };

    const navigateToDiscount = () => {
        navigation.navigate("Discount Calculator");
    };
    
    const navigateToSalesTax = () => {
        navigation.navigate("Sales Tax Calculator");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={navigateToBusinessValuation}>
                    <Text style={styles.buttonText}>Business Valuation Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigateToProfitMargin}>
                    <Text style={styles.buttonText}>Profit Margin Calculator</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={navigateToNetProfitMargin}>
                    <Text style={styles.buttonText}>Net Profit Margin Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigateToGrossMargin}>
                    <Text style={styles.buttonText}>Gross Margin Calculator</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={navigateToSalesMargin}>
                    <Text style={styles.buttonText}>Sales Margin Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigateToVAT}>
                    <Text style={styles.buttonText}>VAT Calculator</Text>
                </TouchableOpacity>


            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={navigateToGST}>
                    <Text style={styles.buttonText}>GST Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigateToDiscount}>
                    <Text style={styles.buttonText}>Discount Calculator</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={navigateToSalesTax}>
                    <Text style={styles.buttonText}>Sales Tax Calculator</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, height: 140, marginHorizontal: 5, padding: 20 }}></View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'lightgray'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
    },
    button: {
        flex: 1,
        height: 140,
        padding: 20,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black'
    },
});

export default Home;
