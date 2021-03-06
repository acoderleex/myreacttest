/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import assign from 'object-assign';
import PagerStyle from '../../styles/pager';

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  current: number;
  count: number;
};

class Pager extends Component {
  props: Props;

  render() {
    var items = new Array(this.props.count).fill(0);
    var dots = items.map((item, index) => {
      var key = `pager-dot-${index}`;
      var colour = index === this.props.current ? '#000000' : '#c7c7c7';

      return (
        <Icon key={key} style={styles.dot} name='circle' size={5} color={colour} />
      );
    });

    return (
      <View style={styles.pager}>{ dots }</View>
    );
  }
}

const styles = StyleSheet.create(assign(
  {},
  PagerStyle
));

module.exports = Pager;
