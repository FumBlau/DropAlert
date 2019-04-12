import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import BluetoothService from  '../services/BluetoothService.js'

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bluetoothState: 'PoweredOff', errors: [] }
    this.bluetoothService = new BluetoothService()
  }

  updateBluetoothState(state) {
    this.setState({ bluetoothState: state })
  }

    componentDidMount() {
        this.bluetoothService.subscribe(this.updateBluetoothState)
    }

    checkConnection = () => {
        this.bluetoothService.startScanning();
    }

    render() {
        if (this.state.bluetoothState == 'PoweredOff') {
          return (
                <View>
                    <Text>Enciende tu bluetooth</Text>
                </View>
          )
        }
        else if (this.state.bluetoothState == 'PoweredOn') {
            return (
                <View>
                    <Button onPress={this.checkConnection} title="Conectar" />
                </View>
            )
        }
        return (<View></View>)
    }
}
