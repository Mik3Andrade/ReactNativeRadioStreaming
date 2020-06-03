import {View, Text} from 'react-native';
import {Player} from 'react-native-audio-streaming';
import React, {useState, useEffect} from 'react';
import firebase from '../../services/Firebase/firebaseConfig';

function PlayerRadio() {
  const [urlS, setSUrl] = useState('');

  useEffect(() => {
    function dados() {
      firebase
        .database()
        .ref('urlStreaming')
        .on('value', snapshot => {
          setSUrl(snapshot.val());
        });
    }

    dados();
  });

  return <Player url={urlS} />;
}

export default PlayerRadio;
