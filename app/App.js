import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import ConfigForm from './components/ConfigForm.js'
import ConnectButton from './components/ConnectButton.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Drop Alert', style: { color: '#fff', fontSize: 24 } }}
        />

        <ConfigForm></ConfigForm>

        <ConnectButton></ConnectButton>
      </View>
    );
  }
}
