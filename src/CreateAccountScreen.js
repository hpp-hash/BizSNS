import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Text style={{color: '#457EED', fontSize: wp('7%'), marginBottom: hp('5%')}}>Create Account</Text>
                    <Text style={{color: '#999999', marginBottom: hp('1%')}}>Full Name</Text>
                    <TextInput style={styles.input}
                    // onChangeText={(email) => this.setState({email})}
                    // value={this.state.email}
                    />
                    <Text style={{color: '#999999', marginBottom: hp('1%')}}>Email</Text>
                    <TextInput style={styles.input}
                    // onChangeText={(email) => this.setState({email})}
                    // value={this.state.email}
                    />
                    <Text style={{color: '#999999', marginBottom: hp('1%')}}>Password</Text>
                    <TextInput style={styles.input}
                    // onChangeText={(password) => this.setState({password})}
                    // value={this.state.password}
                    />
                    <Text style={{color: '#999999', marginBottom: hp('1%')}}>Confirm Password</Text>
                    <TextInput style={styles.input}
                    // onChangeText={(password) => this.setState({password})}
                    // value={this.state.password}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('VerifyEmail')}
                    >
                        <Text style={{color: 'white', fontSize: wp('5%'), textAlign: 'center'}}> Sign Up </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
                        <Text style={{color: '#999999'}}>
                            Already have an account?
                        </Text>
                        <Text> </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{color: '#457EED'}}>
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