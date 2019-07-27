import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, InputAccessoryView, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            firstTime: false
        }
    }

    componentWillMount() {

        // do a simple interval check to await the initial app construction
        let firebaseAppDefined = false
        let self = this
        setInterval(() => {
            if (!firebaseAppDefined) {
                if (firebase.app()) {
                    let self = this
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            console.log("User is logged in => " + user.displayName + " - " + user.email)
                            self.props.navigation.navigate('PostHistory')
                        }
                        else {
                            console.log("User is signed out.")
                                self.setState({
                                    firstTime: true
                                })
                        }
                    })

                    firebaseAppDefined = true
                }
            }
        }, 100)
    }

    renderView() {
        const { firstTime } = this.state
        if (firstTime == false) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator size={"large"} color="#fffff"/>
                </View>
            );
        }
        else {
            return (
                <View style={styles.smallerContainer} >
                    <Image style={styles.image} source={require('../assets/logo_animation-s.gif')} />
                    <Text style={styles.text}>
                        Manage all your social media with just one click.
                        </Text>
                    <Text style={styles.text}>
                        Increase your productivity.
                        </Text>
                    <Text style={styles.text}>
                        For free.
                        </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Get Started </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
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
        borderRadius: wp('5%'),
        marginBottom: hp('7%')
    },

});
