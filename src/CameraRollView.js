import React, { Component, PropTypes } from 'react'
import {
    CameraRoll,
    Image,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    View,
} from 'react-native';

class CameraRollView extends Component {

    constructor(props) {
        super(props)
        var controls = props.controls
        this.state = {
            images: [],
            selected: '',
            fetchParams: { first: 25, assetType: 'All' },
            media: [],
            groupTypes: 'SavedPhotos',
        }
        this._storeImages = this._storeImages.bind(this)
        this._logImageError = this._logImageError.bind(this)
        this._selectImage = this._selectImage.bind(this)
    }

    componentDidMount() {
        // get photos from camera roll
        CameraRoll.getPhotos(this.state.fetchParams)
            .then(r => {
                this.setState({ media: r.edges })
            }).catch((error) => {
                console.log("Error loading images => ", error)
            })
    }

    // callback which processes received images from camera roll and stores them in an array
    _storeImages(data) {
        const assets = data.edges;
        const images = assets.map(asset => asset.node.image);
        this.setState({
            images: images,
        });
    }

    _logImageError(err) {
        console.log(err);
    }

    _selectImage(uri) {
        // define whatever you want to happen when an image is selected here
        this.setState({
            selected: uri,
        });
        console.log('Selected image: ', uri);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    {this.state.media.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                                source={{ uri: p.node.image.uri }}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
});

export default CameraRollView