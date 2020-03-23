import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
class MenuBar extends Component {
    render() {
        return (
            <View style={styles.menubar}>
                    <View style={styles.menubarLeft}>
                        <Icon
                            color='lightgray'
                            size='30'
                            name='menu' />
                    </View>
                    <View style={styles.menubarCenter}>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>ZOZOTOWN</Text>
                    </View>
                    <View style={styles.menubarRight}>
                        <View style={{ marginRight: 10 }}>
                            <Icon
                                color='lightgray'
                                size='30'
                                name='search' />
                        </View>

                        <Icon
                            color='lightgray'
                            size='30'
                            name='shopping-cart' />
                    </View>

                </View>
        );
    }
}

const styles = StyleSheet.create({
    menubar: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        height: 50,
    },
    menubarLeft: {
        justifyContent: "flex-start",
        alignSelf: "center",
        paddingLeft: 10,
    },
    menubarCenter: {
        marginLeft: 20,
        alignSelf: "center",

    },
    menubarRight: {
        justifyContent: 'flex-end',
        flexDirection: "row",
        alignSelf: "center",
        marginRight: 10
    }
});
export default MenuBar;