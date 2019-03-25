import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { BleManager } from 'react-native-ble-plx'

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props)
    this.bleManager = new BleManager()
    this.state = { bluetoothState: 'PoweredOff', errors: [] }
  }

    componentDidMount() {
        const subscription = this.bleManager.onStateChange((state) => {
            this.setState({ bluetoothState: state })
        }, true)
    }

    checkConnection = () => {
        this.bleManager.startDeviceScan(null, null, (error, device) => {
            console.log(error)
            console.log(device)
            if (error) {
                // Handle error (scanning will be stopped automatically)
                this.bleManager.stopDeviceScan()
                return
            }

            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.

            if (device.name === 'OurDevice') {
                if (device.isConnected()) {
                    // Stop scanning as it's not necessary if you are scanning for one device.
                    this.bleManager.stopDeviceScan()
                    // TODO store device name.
                }
            }
        })
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
