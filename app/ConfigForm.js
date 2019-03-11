import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {phone:'', error: false, isSaved: false}
  }

  componentDidMount() {
    this._retrievePhone()
  }

  async _retrievePhone() {
    const phone = await AsyncStorage.getItem('phone')
    if (null !== phone) {
      this.setState({phone: phone, error: false, isSaved: false})
    }
  }

  setPhone = (phone) => {
    this.setState({phone: phone})
    this.validatePhone(phone)
  }

  savePhone = () => {
    const phone = this.state.phone

    this.validatePhone(phone)

    if (this.isValidPhone(phone)) {
      AsyncStorage.setItem('phone', phone)
      this.setState({isSaved: true})
    }
  }

  isValidPhone(phone) {
    return (!isNaN(phone) && isFinite(phone) && 9 == phone.length)
  }

  validatePhone(phone) {
    const isValid = this.isValidPhone(phone)
    this.setState({error: !isValid, isSaved: false})
  }

  renderSuccessMessage() {
    if (this.state.isSaved) {
      return (<Text>Teléfono guardado correctamente</Text>)
    }
    else {
      return (<Text/>)
    }
  }

  render() {
    return (
      <View>
        <Input
          label='Teléfono de contacto en caso de emergencia'
          value={this.state.phone}
          onChangeText = {this.setPhone}
          placeholder='Teléfono'
          keyboardType='numeric'
          errorMessage={ this.state.error ? 'Introduce un teléfono correcto' : '' }
          errorStyle={{ color: 'red' }}
          leftIcon={
            <Icon
              name='mobile-phone'
              size={24}
              color='black'
            />
          }
        />

        { this.renderSuccessMessage() }

        <Button onPress={this.savePhone}
          title="Guardar"
        />
      </View>
    );
  }
}
