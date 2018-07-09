import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text } from 'react-native';
import { ButtonCommon } from '../components/common';

class Home extends Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
        'karla-regular': require('../../assets/fonts/Karla-Regular.ttf'),
        });

        this.setState({
        fontLoaded: true
        });
    }

    render() {
        return (
            <View>
                {
                    this.state.fontLoaded ? (
                    <Text style={styles.textStyle}>00:00</Text>
                    ) : null
                }
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 56,
        fontFamily: 'karla-regular'
    }
}

export default Home;