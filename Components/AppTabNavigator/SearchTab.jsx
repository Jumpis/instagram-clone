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

const SearchTab = () => {
    return (
        <View style={style.container}>
            <Text>SearchTab</Text>
        </View>
    );
};

SearchTab.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-search' style={{color:tintColor}} />
    )
}

export default SearchTab;