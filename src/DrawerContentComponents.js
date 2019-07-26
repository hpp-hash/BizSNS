import React, { Component } from 'react';
import {NavigationActions, SafeAreaView} from 'react-navigation';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';

export default class drawerContentComponents extends Component {
    navigateToScreen = ( route ) => (() => {
        const navigateAction = NavigationActions.navigate({routeName: route});
        this.props.navigation.dispatch(navigateAction);
    })

    constructor(props){
        super(props);
        this.state = {
            firstName: ''
        }
    }

    componentDidMount() {
        let self = this;
        firebase.auth().onAuthStateChanged(function(user){
            console.log("user.displayName = ", user.displayName)
            let firstNameExtract = ""
            if (user.displayName != undefined) {
                firstNameExtract = user.displayName.trim().split(" ")
            }
            self.setState({ firstName: firstNameExtract[0]})
        });
    }

    componentWillUnmount() {
        this.setState({ firstName: '' })
    }

    render() {
        const {firstName} = this.state;
        return(
            <SafeAreaView style={{flex:1, paddingTop: hp('10%')}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: wp('12%'), height: hp('7%')}} source={require('../assets/placeholder_avatar.png')}/>
                    <Text style={[styles.text, {fontSize: wp('6%')}]}>
                    Welcome, {firstName}
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-start', paddingTop: hp('2%'), paddingLeft: wp('5%')}}>
                    <TouchableOpacity
                        style={{margin: hp('1%')}}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <Text style={{fontSize: wp('5%'), textAlign: 'center'}}> Profile </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{margin: hp('1%')}}
                        onPress={() => this.props.navigation.navigate('WelcomeScreen')}
                    >
                        <Text style={{fontSize: wp('5%'), textAlign: 'center'}}> Configure SNS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{margin: hp('1%')}}
                        onPress={() => this.props.navigation.navigate('ChangePassword')}
                    >
                        <Text style={{fontSize: wp('5%'), textAlign: 'center'}}> Change Password </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{margin: hp('1%')}}
                        onPress={() => {
                            firebase.auth().signOut().then(function() {
                                console.log("Successfully removing user from firebase")
                            }).catch(function(error) {
                                console.log("Error removing user from firebase")
                                console.log("User is still logged in?? => " + user.displayName + " - " + user.email)
                            })
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <Text style={{fontSize: wp('5%'), textAlign: 'center'}}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#999999',
        fontSize: wp('5%'),
        padding: wp('3%'),
        textAlign: 'center',
    },
});