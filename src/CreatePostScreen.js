import React, { Component } from 'react';
import { Keyboard, StyleSheet, Button, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, InputAccessoryView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';
import 'firebase/firestore';

export default class CreatePostScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '', media: [], loading: false, error: ''
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight:
                <Button title={"Share"} onPress={params.handleRight} color='#fff' />
            ,
            title: 'Create Post',
            headerStyle: {
                backgroundColor: '#457EED'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTintColor: 'white'
        }
    }

    shareButtonPress() {
        this.setState({
            loading: true
        })


        firebase.firestore().collection("posts").add({
            content: this.state.content,
        })

        let self = this;
            self.setState({ loading: false })
            self.props.navigation.navigate('SuccessPost')
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleRight: this.shareButtonPress.bind(this) })
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
            >
                <Text style={{ color: 'white', fontSize: wp('5%'), textAlign: 'center' }}> Share</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const inputAccessoryViewID = 'inputAccessoryView1';
        return (
            <View style={styles.container}>
                <TextInput
                    textAlign={'left'}
                    multiline={true}
                    numberOfLines={1000}
                    inputAccessoryViewID={inputAccessoryViewID}
                    placeholder="What do you want to talk about?"
                    autoFocus={true}
                    onChangeText={(content) => this.setState({ content })}
                    value={this.state.content}
                    style={{ width: wp('100%'), height: hp('100%'), paddingLeft: wp('5%'), paddingTop: hp('3%') }} />
                <InputAccessoryView nativeID={inputAccessoryViewID}>
                    <View style={{ backgroundColor: '#eff0f1', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={{ padding: hp('1%') }}
                            onPress={Keyboard.dismiss}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Image
                                    style={{ width: wp('5.5%'), height: hp('2.5%'), resizeMode: 'contain' }}
                                    source={require('../assets/video.png')} />
                                <Text> </Text>
                                <Text style={{ color: '#457EED', fontSize: wp('4%') }}>Add Video/Image</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </InputAccessoryView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
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
