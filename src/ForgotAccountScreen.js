import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class ForgotAccountScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Text style={{ color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%') }}>Please enter your email</Text>
                    <TextInput style={styles.input}
                    // onChangeText={(email) => this.setState({email})}
                    // value={this.state.email}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('CheckEmail')}
                    >
                        <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Reset Password </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                        <Text style={{ color: '#999999' }}>
                            Already remember your account?
                        </Text>
                        <Text> </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#457EED' }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    input: {
        borderWidth: wp('0.1%'),
        borderRadius: wp('1%'),
        height: hp('5%'),
        borderColor: '#999999',
        width: wp('70%')
    },

});
