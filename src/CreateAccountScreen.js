import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = { fullName: '', email: '', password: '', confirmPassword: '', loading: false }
    }

    onButtonPress() {
        this.setState({ error: '', loading: true })
        let self = this;
        setTimeout(function () { 
            const { fullName, email, password, confirmPassword} = self.state;
            if (fullName != "" && email != "" && password != "" && confirmPassword != "") {
                if (password != confirmPassword) {
                    self.setState({
                        fullName: '', email: '', password: '', confirmPassword: '', loading: false
                    })
                    
                    // let self = this;
                    setTimeout(function () { self.setState({ error: "Password does not match." }) }, 100);
    
                }
                else {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            firebase.firestore().collection("users").add({
                                fullName: fullName,
                                email: email,
                                password: password,
                            })
                                .then(function (docRef) {
                                    console.log("document written with ID: ", docRef.id)
                                })
                                .catch(function (error) {
                                    self.setState({
                                        fullName: '', email: '', password: '', confirmPassword: '', error: '', loading: false
                                    })
                                    console.log("Error adding document: ", error);
                                })
                            self.props.navigation.navigate('VerifyEmail')
                        })
                        .catch((error) => {
                            let errorCode = error.code;
                            let errorMessage = error.message;
                            let errorCodeMessage = errorCode + " - " + errorMessage;
                            self.setState({
                                fullName: '', email: '', password: '', confirmPassword: '', loading: false
                            })
    
                            // let self = this;
                            setTimeout(function () { self.setState({ error: errorCodeMessage }) }, 100);
                
                        });
                }
            }
            else {
                self.setState({
                    fullName: '', email: '', password: '', confirmPassword: '', loading: false
                })
    
                // let self = this;
                setTimeout(function () { self.setState({ error: "One of the required fields is empty." }) }, 100);
    
            }
        }, 100);

    }

    renderButton() {
        if (this.state.loading)
            return (
                <View style={styles.spinnerStyle}>
                    <ActivityIndicator style={{ paddingTop: hp('2%') }} size={"small"} />
                </View>
            );

        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.onButtonPress.bind(this)}
            >
                <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Sign Up </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Text style={{ color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%') }}>Create Account</Text>
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>Full Name</Text>
                    <TextInput style={styles.input}
                        onChangeText={(fullName) => this.setState({ fullName })}
                        value={this.state.fullName}
                    />
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
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>Confirm Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        value={this.state.confirmPassword}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    {this.renderButton()}
                    <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                        <Text style={{ color: '#999999' }}>
                            Already have an account?
                        </Text>
                        <Text> </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#457EED' }}>
                                Login
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
        marginTop: hp('2%')
    },
})