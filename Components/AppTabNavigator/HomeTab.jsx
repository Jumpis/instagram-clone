import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    }
});

const HomeTab = () => {
    return (
        <View style={style.container}>
            <Text>HomeTab</Text>
        </View>
    );
};

HomeTab.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home' style={{ color: tintColor}} />
    )
}

export default HomeTab;