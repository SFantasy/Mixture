/**
 * Mixture - entry
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

import Feed from './app/Feed';
import Category from './app/Category';
import Setting from './app/Setting';

const TabBarItem = Icon.TabBarItemIOS;

export default class Mixture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'feed',
    };
  }

  render() {
    const {
      selectedTab,
    } = this.state;

    return (
      <TabBarIOS
        translucent={true}
      >
        <TabBarItem
          title="Feed"
          iconSize={24}
          iconName="feed"
          selected={selectedTab === 'feed'}
          onPress={() => {
            this.setState({
              selectedTab: 'feed',
            });
          }}
        >
          <NavigatorIOS
            translucent={true}
            initialRoute={{
              title: 'Feed',
              component: Feed,
            }}
          />
        </TabBarItem>
        <TabBarItem
          title="Category"
          iconSize={24}
          iconName="list-ul"
          selected={selectedTab === 'category'}
          onPress={() => {
            this.setState({
              selectedTab: 'category',
            });
          }}
        >
          <NavigatorIOS
            translucent={true}
            initialRoute={{
              title: 'Category',
              component: Category,
            }}
          />
        </TabBarItem>
        <TabBarItem
          title="Setting"
          iconSize={24}
          iconName="gear"
          selected={selectedTab === 'setting'}
          onPress={() => {
            this.setState({
              selectedTab: 'setting',
            });
          }}
        >
          <NavigatorIOS
            translucent={true}
            initialRoute={{
              title: 'Setting',
              component: Setting,
            }}
          />
        </TabBarItem>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Mixture', () => Mixture);
