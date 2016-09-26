/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

class AwesomeNativeBase extends Component {
    render() {
        return (
            <Container>
                <Header>
                  <Button transparent>
                    <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>My awesome app</Title>

                  <Button transparent>
                    <Icon name='ios-menu' />
                  </Button>
                </Header>
            </Container>
        );
    }
}
AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
