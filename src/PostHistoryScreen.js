import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, SectionList, TouchableOpacity, MenuImage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation';
import firebase from 'firebase';

export default class PostHistoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Post History',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Image source={require('../assets/hamburger_menu.png')}
                    style={{
                        resizeMode: 'contain',
                        width: wp('13%'),
                        height: hp('3%'),
                    }} />
            </TouchableOpacity>
        )
    });

    constructor(props) {
        super(props)
        this.state = {
            dataRetrieved: []
        }
    }

    componentDidMount() {
        var user = firebase.auth().currentUser;
        let userEmail = user.email
        let self = this

        let localDict = {}
        let localArr = []

        firebase.firestore().collection("posts").where("email", "==", userEmail).orderBy("title")
        .get().then(function (querySnapshot) {
            if (querySnapshot.empty) {
                console.log("email, ==, ", userEmail, " EMPTY")
            }
            else {
                querySnapshot.forEach((doc) => {
                    localDict = {
                        "title": doc.data()["title"],
                        "data": doc.data()["data"]
                    }
                    localArr.push(localDict)
                    console.log(localDict)
                    console.log(localArr)
                    self.setState({
                        dataRetrieved: localArr
                    })
                })
            }
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        const { dataRetrieved } = this.state
        console.log(dataRetrieved);
        return (
            <View style={styles.container}>
                <SectionList
                    // sections={[
                    //     {title: "07-26-2019", data: [{content: "Hello World", platform: "Facebook"}, {content: "Love you", platform:"LinkedIn"}]},
                    // ]}
                    sections={dataRetrieved}
                    renderSectionHeader={({ section }) => {
                        console.log("section = ", section)
                        return (
                            <View style={styles.headerView}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: wp('5%'), marginVertical: hp('1%') }}>{section.title}</Text>
                            </View>
                        );
                    }}
                    renderItem={({ item }) => {
                        console.log("item = ", item);
                        return (
                            <View style={styles.postView}>
                                <Text>
                                    {item.content}
                                </Text>
                                <Text />
                                <Text style={{ fontWeight: 'bold' }}>
                                    Posted to {item.platform}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Post" onPress={() => this.props.navigation.navigate('CreatePost')}>
                        <Icon name="md-create" style={{ fontSize: wp('7%'), height: hp('4%'), color: 'white' }} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#457EED',
        justifyContent: 'center',
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
        borderRadius: wp('3%'),
        backgroundColor: '#457EED',
        margin: hp('1%'),
        padding: wp('2%'),
        width: wp('40%')
    },
    image: {
        width: wp('24%'),
        height: hp('11%'),
        marginHorizontal: wp('5%')
    },
    headerView: {
        marginLeft: wp('2%'),
        backgroundColor: '#457EED'
    },
    postView: {
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        padding: hp('5%'),
        borderRadius: wp('3%'),
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
        marginVertical: hp('1%')
    }

});
