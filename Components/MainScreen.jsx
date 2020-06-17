import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerLeft: () => <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
  title: 'Instagram',
  headerRight: () => <Icon name="ios-send" style={{ paddingRight: 10 }} />,
};

export default MainScreen;
