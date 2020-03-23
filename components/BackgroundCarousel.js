import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        
        this.state = {
            selectedIndex: 0
        }
    }

    setSelectedIndex = (e) => {
        const viewSize = e.nativeEvent.layoutMeasurement.width;
        const contentOffset = e.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }
    render() {
        const {images} = this.props;
        const {selectedIndex} = this.state;
        return (
            <View style={{height: "100%", width: "100%"}}>
                <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex}>
                    {images.map(image => (
                        <Image
                            key={image}
                            source={{uri: image}}
                            style={styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, i) =>(
                        <View
                            key={image}
                            style={[styles.whiteCircle, {opacity: i === selectedIndex ?  1 : 0.5}]}
                        />
                    ))}
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: "100%",
        width: DEVICE_WIDTH,
    },
    circleDiv: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
    }
});

export default BackgroundCarousel;