import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
const DEVICE_WIDTH = Dimensions.get("window").width;

export default class FlastListItem extends Component {
    render() {
        return (
            <View style={{width: DEVICE_WIDTH}}>
                <View style={{height: 1, backgroundColor: '#888', marginTop: 20, opacity: 0.2}}></View>
                <View style={styles.container}>
                    <Image 
                        source={{uri: this.props.item.image}}
                        style={{width: 70, height: 70, marginTop: 10}}
                    ></Image>
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
                        
                        <Text style={{fontSize: 15}}>{this.props.item.title.length > 38 ? this.props.item.title.slice(0, 38) + '...' : this.props.item.title}</Text>
                        <Text style={{fontSize: 10, color: '#888'}}>{this.props.item.create}</Text>
                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        width: DEVICE_WIDTH,
    },
});
