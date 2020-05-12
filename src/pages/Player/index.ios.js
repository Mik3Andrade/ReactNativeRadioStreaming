import React from 'react';
import {View, Text} from 'react-native';
import {Player} from 'react-native-audio-streaming';

function PlayerRadio() {
  return (
    <Player
      url={'https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live_96.mp3'}
    />
  );
}

export default PlayerRadio;
