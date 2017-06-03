
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions, TouchableHighlight, Image
} from 'react-native';

import MapView from 'react-native-maps';
import girl from './images/1.jpeg';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 15.04056,
                longitude: 108.85008,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                { latlng: { latitude: 15.04056, longitude: 108.85008 }, tilte: " my wife house", description: "This is my wife houser" },
                { latlng: { latitude: 15.030147, longitude: 108.7977614 }, tilte: " my nebough 1", description: "This is neibought 1" },
                { latlng: { latitude: 15.0390402, longitude: 108.7883394 }, tilte: " my nebough 2", description: "This is neibought 2" }
            ]
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <MapView
                style={styles.map}
                region={this.state.region}
            >
                <MapView.Circle
                    center={this.state.markers[0].latlng}
                    radius={500}
                    strokeWidth={1}
                    fillColor="rgba(r,g,b,0.5)"
                />

                {this.state.markers.map((maker, i) => (
                    <MapView.Marker
                        key={i}
                        coordinate={maker.latlng}
                        tilte={maker.tilte}
                        
                    >

                        <MapView.Callout style={{ width: 100 }} >
                            <TouchableHighlight underlayColor={'rgba(200,200,200,.1)'}>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ flex: 0.8 }}>{maker.description}</Text>
                                    <Image source={girl} />
                                </View>
                            </TouchableHighlight>
                        </MapView.Callout>

                    </MapView.Marker>
                ))}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: width,
        height: height
        // position: 'absolute',
        // top: 0, left: 0, right: 0, bottom: 0,
    }
});

