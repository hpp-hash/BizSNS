import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }

    onButtonPress() {
        this.setState({ error: '', loading: true })
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.onLoginFailure.bind(this)(errorCode, errorMessage)
            })
    }

    onLoginSuccess() {
        this.props.navigation.navigate('PostHistory');
        this.setState({
            email: '', password: '', error: '', loading: false
        })
    }

    onLoginFailure(errorCode, errorMessage) {
        let errorCodeMessage = "";
        let self = this;
        if (errorCode == 'auth/invalid-email' || errorCode == 'auth/wrong-password') {
            errorCodeMessage = "Invalid email address or password"
        }
        else {
            errorCodeMessage = errorCode + " - " + errorMessage;
        }
        
        setTimeout(function () { self.setState({ error: errorCodeMessage, loading: false }) }, 100);

    }

    renderButton() {
        if (this.state.loading)
            return (
                <View style={styles.spinnerStyle}>
                    <ActivityIndicator style={{paddingTop: hp('2%')}} size={"small"} />
                </View>
            );

        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.onButtonPress.bind(this)}
            >
                <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Login </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Text style={{ color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%') }}>Please Login</Text>
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>Email</Text>
                    <TextInput style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoCapitalize='none'
                    />
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ForgotAccount')}
                    >
                        <Text style={{ color: '#457EED' }}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                    {this.renderButton()}
                    <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                        <Text style={{ color: '#999999' }}>
                            Don't have an account?
                        </Text>
                        <Text> </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CreateAccount')}>
                            <Text style={{ color: '#457EED' }}>
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ marginTop: hp('2%'), textAlign: 'center', color: 'red' }}>
                        {this.state.error}
                    </Text>
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
        justifyContent: 'flex-start',
        // alignItems: 'center',
        borderRadius: wp('5%'),
        paddingVertical: hp('5%'),
        paddingHorizontal: wp('10%'),
        width: wp('90%')
    },
    input: {
        borderWidth: wp('0.1%'),
        borderRadius: wp('1%'),
        height: hp('5%'),
        borderColor: '#999999',
        marginBottom: hp('3%')
    },
    button: {
        borderRadius: wp('10%'),
        backgroundColor: '#457EED',
        padding: wp('3%'),
        marginTop: hp('5%')
    }
})