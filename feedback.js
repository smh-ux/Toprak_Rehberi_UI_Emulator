import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const FeedBackScreen = ({ setScreen }) => {
    const name = "Semih Okumuş";
    const date = "03.01.2024";

    const [checked, setChecked] = useState('');

    return(
        <SafeAreaView>
            <View style={styles.view1}>
                <Text style={styles.view1_text1}>Sn.{name}</Text>
                <Text style={styles.view1_text2}>{date} tarihli ekimini yapmış olduğunuz ürünler için bu anketi doğru şekilde doldurmanız önem arz eder. Ekimini yapmış olduğunuz ürünlerin listesi aşağıda yer almaktadır. Buna göre gözlemleriniz nelerdir?</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={styles.product_name}>Arpa</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.radio_button}>
                        <Text>Good</Text>
                        <RadioButton 
                            value='Good'
                            status={ checked === 'Good' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Good')}
                        />
                    </View>
                    <View style={styles.radio_button}>
                        <Text>Normal</Text>
                        <RadioButton 
                            value='Normal'
                            status={ checked === 'Normal' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Normal')}
                        />
                    </View>
                    <View style={styles.radio_button}>
                        <Text>Bad</Text>
                        <RadioButton 
                            value='Bad'
                            status={ checked === 'Bad' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Bad')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view1: {
        width: WIDTH-40,
        height: 200,
        marginLeft: 20,
        marginTop: 10
    },

    view1_text1: {
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },

    view1_text2: {
        color: '#000',
        textAlign: 'center'
    },

    product_name: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20
    },

    radio_button: {
    }
});

export default FeedBackScreen;