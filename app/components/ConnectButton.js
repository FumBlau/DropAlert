import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { BleManager, LogLevel } from 'react-native-ble-plx'
import Eddystone from "@lg2/react-native-eddystone";

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props)
    this.bleManager = new BleManager()
    this.bleManager.setLogLevel(LogLevel.Verbose)
    this.state = { bluetoothState: 'PoweredOff', errors: [] }
  }

    componentDidMount() {
        const subscription = this.bleManager.onStateChange((state) => {
            this.setState({ bluetoothState: state })
        }, true)

        Eddystone.addListener("onUIDFrame", this.onUID);
        Eddystone.addListener("onEIDFrame", this.onEID);
        Eddystone.addListener("onURLFrame", this.onUrl);
        Eddystone.addListener("onTelemetryFrame", this.onTelemetry);
        Eddystone.addListener("onEmptyFrame", this.onEmptyFrame);
        Eddystone.addListener("onStateChanged", this.onStateChanged);
    }

    onUID(beacon) {
        console.log("UID Beacon:", beacon);
    }

    onEID(beacon) {
        console.log("EID Beacon:", beacon);
    }

    onUrl(url) {
        console.log("URL:", url);
    }

    onTelemetry(telemetry) {
        console.log("Telemetry:", telemetry);
    }

    onStateChanged(state) {
        console.log(`state: ${state}`);
    }

    checkConnection = () => {
        Eddystone.startScanning();
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
