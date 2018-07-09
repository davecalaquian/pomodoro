import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';

class ButtonCommon extends Component {
    render() {
        return (
            <Button iconLeft dark>
                <Icon name='cog' />
                <Text>Settings</Text>
            </Button>
        );
    }
}

export { ButtonCommon };