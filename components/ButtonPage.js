import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get("window").width;

class ButtonPage extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={{textAlign: 'center', marginTop: 20}}>Order this product from outside of Japan</Text>
                </View>
                <View>
                    <Button
                    icon={
                        <Icon 
                        name="home"
                        size={20}
                        color="white"
                        />
                    }
                        title=" SHOP NOW"
                        buttonStyle={{
                            backgroundColor:'#36b7f4',
                            width: Math.floor(DEVICE_WIDTH - 20),
                            height: 70,
                            marginTop: 10
                        }}
                    />
                    <Text style={{opacity: 0.5, fontSize: 10, textAlign: 'right'}}>Powered by Buyee</Text>
                    <Button
                    icon={
                        <Icon 
                        name="shopping-cart"
                        size={20}
                        color="white"
                        />
                    }
                        title=" カートに入れる"
                        buttonStyle={{
                            backgroundColor:'#36b7f4',
                            width: Math.floor(DEVICE_WIDTH - 20),
                            height: 70,
                            marginTop: 10
                        }}
                    />
                    <Button
                    icon={
                        <Icon 
                        name="favorite-border"
                        size={20}
                        color="white"
                        />
                    }
                        title=" お気に入りに追加する"
                        buttonStyle={{
                            backgroundColor:'#ff7683',
                            width: Math.floor(DEVICE_WIDTH - 20),
                            height: 70,
                            marginTop: 10
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default ButtonPage;