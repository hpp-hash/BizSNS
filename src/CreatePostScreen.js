import React, { Component } from 'react';
import { Keyboard, StyleSheet, Button, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, InputAccessoryView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';

export default class CreatePostScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentState: '', loading: false, error: '', textDate: '', email: ''
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

        let self = this;
        var trigger = false
        let date = this.state.textDate
        // let date = "07/27/2019"
        // let date = "07/28/2019"
        // let date = "07/29/2019"
        let databaseArr = []

        firebase.firestore().collection("posts").where("title", "==", date)
            .get().then(snapshot => {
                // for collections, use .empty
                if (!snapshot.empty) {
                    console.log("title, ==, ", date, " EXISTS")
                    snapshot.forEach((doc) => {
                        // for documents, use .exists
                        if (doc.exists) {
                            console.log(doc.id, " - ", doc.data())
                            trigger = true
                            databaseArr = doc.data()["data"]
                        }
                        if (trigger) {
                            let newContentSameDay = { content: self.state.contentState, platform: "LinkedIn" }
                            databaseArr.push(newContentSameDay)
                            console.log("databaseArr=", databaseArr)
                            firebase.firestore().collection("posts").doc(doc.id).update({
                                data: databaseArr
                            })
                        }
                        trigger = false
                    })
                }
                else
                {
                    console.log("title, ==, ", date, " DOES NOT EXISTS")
                    let dataPassed = [
                        { content: this.state.contentState, platform: "LinkedIn" }
                    ]
                    firebase.firestore().collection("posts").add({
                        title: date,
                        email: this.state.email,
                        data: dataPassed
                    });
                }
            })

            self.props.navigation.navigate('SuccessPost')
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleRight: this.shareButtonPress.bind(this) })

        let user = firebase.auth().currentUser;
        let userEmail = user.email;
        let d = new Date();
        let date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();

        this.setState({
            email: userEmail,
            textDate: date
        })

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
                    onChangeText={(contentState) => this.setState({ contentState })}
                    value={this.state.contentState}
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
