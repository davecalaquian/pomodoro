import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements'

class ButtonCommon extends Component {
    render() {
        return (
            <View>
                <Button
                    large
                    raised
                    backgroundColor= '#f44e42'
                    title='START' />
            </View>
        );
    }
}

export { ButtonCommon };