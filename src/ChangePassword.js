import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';
import 'firebase/firestore';

export default class ChangePassword extends React.Component {
    static navigationOptions = {
        title: 'Change Password'
    }

    constructor(props) {
        super(props);
        this.state = { currentPassword: '', newPassword: '', confirmPassword: '', error: '', loading: false, infoBool: false, info: '' }
    }

    onButtonPress() {
        this.setState({ loading: true })
        let self = this;
        const { currentPassword, newPassword, confirmPassword } = this.state;
        let userEmail = firebase.auth().currentUser.email;
        firebase.firestore().collection("users").doc(userEmail).get()
            .then(function (document) {
                if (document.data()["password"] == currentPassword) {
                    if (newPassword == confirmPassword) {
                        firebase.auth().currentUser.updatePassword(newPassword)
                            .then(function () {
                                firebase.firestore().collection("users").doc(userEmail).update({
                                    password: newPassword
                                })

                                setTimeout(function () { self.setState({ infoBool: true, info: "Update password successfully.", loading: false }) }, 500)
                                self.setState({ currentPassword: '', newPassword: '', confirmPassword: '' })
                            })
                            .catch(function (error) {
                                let errorMessage = error.code + " - " + error.message;
                                setTimeout(function () { self.setState({ error: errorMessage, infoBool: false, loading: false }) }, 500)
                            })
                    }
                    else {
                        setTimeout(function () { self.setState({ error: "Password does not match.", infoBool: false, loading: false }) }, 500)
                    }
                }
                else {
                    setTimeout(function () { self.setState({ error: "Current password is incorrect.", infoBool: false, loading: false }) }, 500)
                }
            }).catch(function (error) {
                let errorMessage = error.code + " - " + error.message;
                setTimeout(function () { self.setState({ error: errorMessage, infoBool: false, loading: false }) }, 500)
            })

    }

    renderMessage() {
        if (this.state.infoBool) {
            return (
                <Text style={{ marginTop: hp('2%'), textAlign: 'center', color: '#457EED' }}>
                    {this.state.info}
                </Text>);
        }
        else  {
            return (
                <Text style={{ marginTop: hp('2%'), textAlign: 'center', color: 'red' }}>
                    {this.state.error}
                </Text>
            );
        }
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <View style={styles.spinnerStyle}>
                    <ActivityIndicator style={{ paddingTop: hp('2%') }} size={"small"} />
                </View>
            );
        }
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.onButtonPress.bind(this)}
            >
                <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Save </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Text style={{ color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%') }}>Change Password</Text>
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>Current Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={(currentPassword) => this.setState({ currentPassword })}
                        value={this.state.currentPassword}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>New Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={(newPassword) => this.setState({ newPassword })}
                        value={this.state.newPassword}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    <Text style={{ color: '#999999', marginBottom: hp('1%') }}>Confirm New Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        value={this.state.confirmPassword}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    {this.renderMessage()}
                    {this.renderButton()}
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
    },
})