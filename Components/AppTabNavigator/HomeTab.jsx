import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

const HomeTab = () => {
    return (
        <Container>
            <Content>
                <CardComponent />
            </Content>
        </Container>
    );
};

HomeTab.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home' style={{ color: tintColor}} />
    )
}

export default HomeTab;