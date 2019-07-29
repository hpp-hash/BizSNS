import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, InputAccessoryView, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';

export default class ForgotAccountScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { email: '', loading: false }
    }

    onButtonPress() {
        const { email } = this.state;
        let self = this;
        this.setState({ loading: true });
        firebase.auth().sendPasswordResetEmail(email)
            .then(function () {
                // email sent
            })
            .catch(function (error) {
                console.log(error);
            })
        setTimeout(function () { self.props.navigation.navigate('CheckEmail') }, 500)
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <View style={styles.spinnerStyle}>
                    <ActivityIndicator style={{ paddingTop: hp('2%') }} size={"small"} />
                </View>
            )
        }
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.onButtonPress.bind(this)}
            >
                <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Reset Password </Text>
            </TouchableOpacity>
        )
    }

    renderView(inputAccessoryViewID) {
        if (Platform.OS == 'ios') {
            return (
                <View style={styles.smallerContainer}>
                    <Text style={{ color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%') }}>Please enter your email</Text>
                    <TextInput style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoCapitalize='none'
                        inputAccessoryViewID={inputAccessoryViewID}
                    />
                    <InputAccessoryView nativeID={inputAccessoryViewID}>
                        <View style={{ backgroundColor: 'white', alignItems: 'flex-end', backgroundColor: '#eff0f1' }}>
                            <TouchableOpacity style={{ padding: hp('1%'), }}
                                onPress={Keyboard.dismiss}>
                                <Text style={{ color: '#457EED', fontSize: wp('5%') }}>Hide</Text>
                            </TouchableOpacity>
                        </View>
                    </InputAccessoryView>
                    {this.renderButton()}
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
            );
        }
        else if (Platform.OS = 'android') {
            return (
                <View style={styles.smallerContainer}>
                    <Text style={{ color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%') }}>Please enter your email</Text>
                    <TextInput style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoCapitalize='none'
                    />
                    {this.renderButton()}
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
            )
        }
    }

    render() {
        const inputAccessoryViewID = 'inputAccessoryView1';
        return (
            <View style={styles.container}>
                {this.renderView(inputAccessoryViewID)}
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
        ...Platform.select({
            ios: {
                height: hp('5%')
            }
        }),
        borderColor: '#999999',
        width: wp('70%')
    },

});
