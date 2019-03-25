import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { BleManager } from 'react-native-ble-plx';

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props)
    this.bleManager = new BleManager()
  }

  checkConnection = () => {
    const subscription = this.manager.onStateChange((state) => {
        if (state === 'PoweredOff') {
          //Avisar al cliente de activar bluetooth
        }

        if (state === 'PoweredOn') {
            this.bleManager.startDeviceScan(null, null, (error, device) => {
              if (error) {
                // Handle error (scanning will be stopped automatically)
                return
              }

              // Check if it is a device you are looking for based on advertisement data
              // or other criteria.
              console.log(device)

              if (device.name === 'OurDevice') {

                  // Stop scanning as it's not necessary if you are scanning for one device.
                  this.manager.stopDeviceScan();

                  // Proceed with connection.

              }

        }

    }, true);

    });
  }

  render() {
    return (
      <View>
        <Button onPress={this.checkConnection} title="Conectar" />
      </View>
    );
  }
}
