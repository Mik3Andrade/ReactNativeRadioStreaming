import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerRadio from '../Player';

// import { Container } from './styles';

function Home() {
  return (
    <View style={styles.ContainerView}>
      <PlayerRadio />
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerView: {flex: 1, backgroundColor: '#fff'},
});

export default Home;
