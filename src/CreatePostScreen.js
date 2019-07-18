import React, {Component} from 'react';
import {Keyboard, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class CreatePostScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Post'
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.smallerContainer}>
                    <TextInput multiline={true}
                        multiline={true}
                        placeholder="What's on your mind?"
                        returnKeyType='done'
                        blurOnSubmit={true}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                        style={{backgroundColor: "#E8E8E8", width: wp('80%'), height: hp('30%'), borderRadius: wp('1%')}}/>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{backgroundColor: "#E8E8E8", width: wp('35%'), padding: wp('2%'), borderRadius: wp('1%'), margin: wp('3%')}}
                            // onPress={() => this.props.navigation.navigate('CreatePost')}
                        >
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                                <Image 
                                    style={{width: wp('11%'), height: hp('5%'), resizeMode: 'contain'}}
                                    source={require('../assets/camera.png')}/>
                                <Text style={{color: 'black', fontSize: wp('5%'), textAlignVertical: 'center', textAlign: 'right'}}> Image </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{backgroundColor: "#E8E8E8", width: wp('35%'), padding: wp('2%'), borderRadius: wp('1%'), margin: wp('3%')}}
                            // onPress={() => this.props.navigation.navigate('SuccessPost')}
                        >
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                                <Image 
                                    style={{width: wp('11%'), height: hp('5%'), resizeMode: 'contain'}}
                                    source={require('../assets/video.png')} />
                                <Text style={{color: 'black', fontSize: wp('5%'), textAlignVertical: 'center', textAlign: 'right'}}> Video</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('SuccessPost')}
                    >
                        <Text style={{color: 'white', fontSize: wp('5%'), textAlign: 'center'}}> Share</Text>
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
