import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {phone:''}
  }

  componentDidMount() {
    this._retrievePhone()
  }

  async _retrievePhone() {
    const phone = await AsyncStorage.getItem('phone')
    if (null !== phone) {
      this.setState({phone: phone})
    }
  }

  setPhone = (value) => {
    AsyncStorage.setItem('phone', value);
    this.setState({phone: value});
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Drop Alert', style: { color: '#fff', fontSize: 24 } }}
        />

        <Input
          value={this.state.phone}
          onChangeText = {this.setPhone}
          placeholder='Teléfono'
          keyboardType='numeric'
          errorMessage='Introduce un teléfono correcto'
          errorStyle={{ color: 'red' }}
          leftIcon={
            <Icon
              name='mobile-phone'
              size={24}
              color='black'
            />
          }
        />

        <Button onPress={this._savePhone}
          title="Guardar"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
