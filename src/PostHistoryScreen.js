import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SectionList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class PostHistoryScreen extends React.Component {
    static navigationOptions = {
        title : 'Post History' 
    }

    render() {
        return (
            <View style={styles.container}>
                    <SectionList 
                        sections={[
                            { title: 'July 1st, 2019', data: [{content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'Facebook, Twitter, Instagram, LinkedIn, Pinterest' }, {content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'Facebook, Twitter' },  ] },
                            { title: 'July 2nd, 2019', data: [{content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'Facebook' } ] },
                            { title: 'July 3rd, 2019', data: [{content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'LinkedIn, Twitter' } ] },
                            { title: 'July 4th, 2019', data: [{content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'Facebook, LinkedIn, Instagram, Twitter' } ] },
                            { title: 'July 5th, 2019', data: [{content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'Pinterest, Twitter, Instagram' } ] },
                            { title: 'July 6th, 2019', data: [{content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', platform: 'LinkedIn, Twitter, Pinterest' } ] },

                        ]}
                        renderSectionHeader={ ({section}) => {
                            return(
                                <View style={styles.headerView}>
                                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: wp('5%'), marginVertical: hp('1%')}}>{section.title}</Text>
                                </View>
                            );
                        }}
                        renderItem={ ({item}) => {
                            console.log(item.data);
                            return (
                                <View style={styles.postView}>
                                    <Text>
                                        {item.content}
                                    </Text>
                                    <Text/>
                                    <Text style={{fontWeight: 'bold'}}>
                                        Posted to {item.platform}
                                    </Text>
                                </View>
                            )
                        }}
                        keyExtractor={ (item, index) => index }
                    />
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
