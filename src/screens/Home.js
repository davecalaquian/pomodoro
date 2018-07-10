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
            <View style={styles.containerStyle}>
                {
                    this.state.fontLoaded ? (
                    <View>
                        <Text style={styles.textStyle}>00:00</Text>
                        <ButtonCommon />
                    </View>
                    ) : null
                }
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 125,
        fontFamily: 'karla-regular'
    }
}

export default Home;