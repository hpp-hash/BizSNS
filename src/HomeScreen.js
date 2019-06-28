import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <Image style={styles.image} source={require('../assets/logo_animation-s.gif')}/>
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
                        <Text style={{color: 'white', fontSize: wp('5%'), textAlign: 'center'}}> Get Started </Text>
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
