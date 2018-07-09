import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>00:00</Text>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 72
    }
}

export default Home;