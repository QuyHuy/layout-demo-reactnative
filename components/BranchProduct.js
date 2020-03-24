import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class BranchProduct extends Component {
    render() {
        return (
            <View style={{ width: DEVICE_WIDTH }}>
                <View style={styles.container}>
                    <View style={styles.background}>
                        <Image
                            source={{ uri: 'https://o.imgz.jp/common/shop/shop_1730.jpg' }}
                            style={styles.imageBackground}
                        ></Image>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>

                        <Text style={{ fontSize: 15 }}>取り扱いショップ</Text>
                        <Text style={{ fontSize: 10, color: '#888' }}>kobelettuce</Text>
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
        height: 70
    },
    background: {
        marginLeft: 10,
        marginTop: 5,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    imageBackground: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#888"
    }
});
