import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileTab = () => {
  return (
    <View style={style.container}>
      <Text>ProfileTab</Text>
    </View>
  );
};

ProfileTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" style={{ color: tintColor }} />
  ),
};

export default ProfileTab;
