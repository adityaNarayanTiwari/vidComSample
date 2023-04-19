import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#cc66ff' }]} />
)

export default class Videos extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Recent' },
      { key: 'second', title: 'Non Inventory' },
      { key: 'third', title: 'Inventory' }
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});