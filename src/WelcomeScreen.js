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
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: wp('12%'), height: hp('7%')}} source={require('../assets/placeholder_avatar.png')}/>
                        <Text style={[styles.text, {fontSize: wp('8%')}]}>
                            Welcome, Patrick.
                        </Text>
                    </View>
                    <Text style={[styles.text, {color: 'black'}]}>
                        What platforms would you like to post your message?
                    </Text>
                    <View style={{flexDirection: 'row', margin: wp('5%')}}>
                        <Image style={styles.image} source={require('../assets/facebook.png')}/>
                        <Image style={styles.image} source={require('../assets/twitter.png')}/>
                    </View>
                    <View style={{flexDirection: 'row', margin: wp('5%')}}>
                        <Image style={styles.image} source={require('../assets/linkedin.png')}/>
                        <Image style={styles.image} source={require('../assets/pinterest.png')}/>
                    </View>
                    <View style={{flexDirection: 'row', margin: wp('5%')}}>
                        <Image style={styles.image} source={require('../assets/instagram.png')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('PostHistory')}
                        >
                            <Text style={{color: 'white', fontSize: wp('5%'), textAlign: 'center'}}> View Past Post </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('CreatePost')}
                        >
                            <Text style={{color: 'white', fontSize: wp('5%'), textAlign: 'center'}}> Create Post </Text>
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
        width: wp('90%')
    },
    text: {
        color: '#999999',
        fontSize: wp('5%'),
        padding: wp('3%'),
        textAlign: 'center',
    },
    button: {
        borderRadius: wp('3%'),
        backgroundColor: '#457EED',
        margin: hp('1%'),
        padding: wp('2%'),
        width: wp('40%')
    },
    image: {
        width: wp('24%'),
        height: hp('11%'),
        marginHorizontal: wp('5%'),
        resizeMode: 'contain'
    },

});
