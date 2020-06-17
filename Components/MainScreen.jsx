import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: 'white',
          },
          android: {
            backgroundColor: 'white',
          },
        }),
      },
      iconStyle: { height: 30 },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
    },
  }
);

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
