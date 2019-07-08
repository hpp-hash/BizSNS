import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Configure SNS'
    }

    state = {
        isOnFB: false,
        isOnTW: false,
        isOnIN: false,
        isOnLI: false,
        isOnPN: false,
    }
    render() {
        return(
                <View style={styles.smallerContainer}>
                    <Text style={[styles.text, {color: 'black'}]}>
                        What platforms would you like to post your message?
                    </Text>
                    <View style={{flexDirection: 'column', }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.image} source={require('../assets/facebook.png')}/>
                            <View style={{width: wp('30%')}}>
                                <Text style={styles.text}>Facebook</Text>
                            </View>
                            <ToggleSwitch
                                isOn={this.state.isOnFB}
                                onColor='#457EED'
                                offColor='#999999'
                                size='medium'
                                onToggle={ (isOnFB) => this.setState({isOnFB})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.image} source={require('../assets/twitter.png')}/>
                            <View style={{width: wp('30%')}}>
                                <Text style={styles.text}>Twitter</Text>
                            </View>
                            <ToggleSwitch
                                isOn={this.state.isOnTW}
                                onColor='#457EED'
                                offColor='#999999'
                                size='medium'
                                onToggle={ (isOnTW) => this.setState({isOnTW})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.image} source={require('../assets/instagram.png')}/>
                            <View style={{width: wp('30%')}}>
                                <Text style={styles.text}>Instagram</Text>
                            </View>
                            <ToggleSwitch
                                isOn={this.state.isOnIN}
                                onColor='#457EED'
                                offColor='#999999'
                                size='medium'
                                onToggle={ (isOnIN) => this.setState({isOnIN})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.image} source={require('../assets/linkedin.png')}/>
                            <View style={{width: wp('30%')}}>
                                <Text style={styles.text}>LinkedIn</Text>
                            </View>
                            <ToggleSwitch
                                isOn={this.state.isOnLI}
                                onColor='#457EED'
                                offColor='#999999'
                                size='medium'
                                onToggle={ (isOnLI) => this.setState({isOnLI})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.image} source={require('../assets/pinterest.png')}/>
                            <View style={{width: wp('30%')}}>
                                <Text style={styles.text}>Pinterest</Text>
                            </View>
                            <ToggleSwitch
                                isOn={this.state.isOnPN}
                                onColor='#457EED'
                                offColor='#999999'
                                size='medium'
                                onToggle={ (isOnPN) => this.setState({isOnPN})}
                            />
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
        marginRight: wp('4%')
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
        marginVertical: hp('2%'),
        marginRight: wp('5%'),
        resizeMode: 'contain'
    },

});
