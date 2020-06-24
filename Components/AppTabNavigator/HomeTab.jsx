import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';

const fetchFeeds = () => {
  const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'call',
    params: [
      'database_api',
      'get_discussions_by_created',
      [{ tag: 'kr', limit: 20 }],
    ],
  };
  return fetch('https://api.steemit.com', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.result);
};

const HomeTab = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetchFeeds().then((feeds) => setFeeds(feeds));
  }, []);

  return (
    <Container>
      <Content>
        {feeds.map((feed, i) => (
          <CardComponent key={i} data={feed} />
        ))}
      </Content>
    </Container>
  );
};

HomeTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" style={{ color: tintColor }} />
  ),
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeTab;
