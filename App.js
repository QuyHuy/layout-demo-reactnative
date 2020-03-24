import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Animated, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get("window").width;

import MenuBar from './components/MenuBar';
import BackgroundCarousel from './components/BackgroundCarousel';
import Information from './components/Information';
import ButtonPage from './components/ButtonPage';
import TabContent from './components/TabContent';
import BranchProduct from './components/BranchProduct';

const images = [
    "https://c.imgz.jp/923/45225923/45225923b_14_d_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_8_d_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923_34_d_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_169_d_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923_b_01_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923_b_02_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_03_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_06_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_07_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_08_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_09_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_10_500.jpg",
    "https://c.imgz.jp/923/45225923/45225923b_b_11_500.jpg"
];
export default class App extends Component {
    render() {
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <View style={styles.container}>
                    <MenuBar></MenuBar>
                    <View style={{ alignSelf: 'flex-start', color: '#808080', flexDirection: 'row', padding: 5, opacity: 0.5 }}>
                        <Icon
                            size='10'
                            name='store' />
                        <Text style={{ marginLeft: 5, fontSize: 10 }}>
                            kobelettuce
                    </Text>
                    </View>

                    {/* Content */}
                    <View style={styles.carousel}>
                        <BackgroundCarousel images={images}></BackgroundCarousel>
                    </View>
                    <Information></Information>
                    <ButtonPage></ButtonPage>
                    <TabContent></TabContent>
                    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'rgb(136, 136, 136)', opacity: 0.2}}></View>
                    <View style={{width: DEVICE_WIDTH, height: 60, backgroundColor: '#FAFAFA', justifyContent: 'center', alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', color: '#08c', fontSize: 11}}>返品について  <Text style={{borderLeftWidth: 1, borderLeftColor: 'lightgray'}}>  ポイントについて</Text></Text>
                    </View>
                    <View style={{height: 1, width: DEVICE_WIDTH, backgroundColor: 'rgb(136, 136, 136)', opacity: 0.2}}></View>
                    <BranchProduct></BranchProduct>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: DEVICE_WIDTH
    },
    carousel: {
        height: 450,
        width: DEVICE_WIDTH
    }
});
