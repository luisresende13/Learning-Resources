import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from 'styles';


class CenterContent extends Component {
  render() {
    return (
      <View style={styles.main_view}>
        <View style={styles.view}>
          <Text>Hello, world!</Text>
        </View>
        <View style={styles.view}>
          <Text>Hello, world!</Text>
        </View>
        <View style={styles.view}>
          <Text>Hello, world000!</Text>
        </View>
      </View>
    );
  }
}

export default CenterContent;