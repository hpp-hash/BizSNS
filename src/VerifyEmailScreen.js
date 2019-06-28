import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class VerifyEmailScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                <Text style={{color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%')}}>Please verify your email</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{color: 'white', fontSize: wp('5%'), textAlign: 'center'}}> Login </Text>
                    </TouchableOpacity>
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
        width: wp('90%'),
        height: hp('80%')
    },
    button: {
        borderRadius: wp('10%'),
        backgroundColor: '#457EED',
        padding: wp('3%'),
        marginTop: hp('5%'),
        width: wp('70%')
    },

});
