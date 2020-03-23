import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class Information extends Component {
    render() {
        return (
            <View style={styles.branchName}>
                {/* Title */}
                <View>
                    <Text style={{fontSize: 28, color: '#08c'}}>KOBE LETTUCE</Text>
                    <Text style={{fontSize: 14, color: '#888888', opacity: 0.5, marginTop: 10}}>スリットフレアケープスリーブカットソートップス</Text>
                </View>
                {/* Detail */}
                <View style={styles.detail}>
                    <Text style={{fontSize: 14, color: "#ff0034",}}>セール価格</Text>
                </View>

                {/* Price */}
                <View style={styles.price}>
                    <View>
                    <Text style={{fontSize: 30, color: "#ff0034", marginTop: 5}}>¥1,310 
                        <Text style={{fontSize: 10, color: "#ff0034"}}>税込</Text>
                    </Text>
                    </View>
                   
                    <View style={{marginTop: 10, marginLeft: 25, height: 38, backgroundColor: '#efefef'}}>
                        <Text style={{fontSize: 10, color: "#333333", fontWeight: "bold", paddingTop: 5}}>ツケ払いできます</Text>
                        <Text style={{fontSize: 10, color: "#333333", marginTop: 6}}>お支払いは5月22日<Text style={{textDecorationLine: 'underline'}}>詳細</Text></Text>
                    </View>
                </View>
                    
                {/* </View> */}
                <View style={styles.description}>
                    <Icon
                        name='copyright'
                    />
                    <Text style={{marginTop: 3}}>ZOZOCARDなら5倍還元
                        <Text style={{color: 'red'}}> 58pt</Text>
                        <Text>（通常11pt）</Text>
                        <Text>詳細</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    branchName: {
        flexDirection: 'column',
        marginTop: 20, 
        marginLeft: -20
    },
    detail: {
        marginTop: 20,
    },
    price: {
        flexDirection: 'row'
    },
    description: {
        flexDirection: 'row',
        marginTop: 20
    }
})
export default Information;