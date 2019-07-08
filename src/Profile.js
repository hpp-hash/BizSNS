import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Image style={styles.image} source={require('../assets/placeholder_avatar.png')}/>
                    <Text style={styles.text}>
                        Name: Patrick Woo
                    </Text>
                    <Text style={styles.text}>
                        Email: patrickwoo@gmail.com
                    </Text>
                    <Text style={{fontSize:wp('3%'), color: '#999999', textAlign: 'center',}}>(not editable)</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#457EED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallerContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('5%'),
        paddingVertical: hp('5%'),
        marginHorizontal: wp('5%'),
        width: wp('90%')
    },
    text: {
        color: '#999999',
        fontSize: wp('5%'),
        padding: wp('3%'),
        textAlign: 'center',
    },
    button: {
        borderRadius: wp('10%'),
        backgroundColor: '#457EED',
        padding: wp('3%'),
        marginTop: hp('5%'),
        width: wp('70%')
    },
    image: {
        width: hp('60%'),
        height: hp('40%'),
        resizeMode: 'contain'
    },

});
