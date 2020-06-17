import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: { screen: HomeTab },
  SearchTab: { screen: SearchTab },
  AddMediaTab: { screen: AddMediaTab },
  LikesTab: { screen: LikesTab },
  ProfileTab: { screen: ProfileTab },
});

const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainScreen = () => {
  return (
    // <View style={styles.container}>
    //   <Text>MainScreen</Text>
      <AppTabContainer />
    // </View>
  );
};

MainScreen.navigationOptions = {
  headerLeft: () => <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
  title: 'Instagram',
  headerRight: () => <Icon name="ios-send" style={{ paddingRight: 10 }} />,
};

export default MainScreen;
