import React from 'react'
import { View } from 'react-native'
import BackgroundTimer from 'react-native-background-timer';
import { Button, Text } from 'react-native-elements'

import BluetoothService from  '../services/BluetoothService.js'
import GeoLocationService from '../services/GeoLocationService.js'
import SmsService from '../services/SmsService.js'
import StorageService from '../services/StorageService.js'

export default class ActivationButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundServiceCheck: false,
            bluetoothState: "PoweredOff",
            isScanning: false,
            location: {}
        }

        this.bluetoothService = new BluetoothService()
        this.geoLocationService = new GeoLocationService()
        this.smsService = new SmsService()
        this.storage = new StorageService()
    }

    setLocation(location) {
        this.setState({ location: location, loading: false });
    }

    getLocation() {
        this.geoLocationService.getCurrentLocation((location) => { this.onLocationSuccess(location) }, (error) => { this.setLocation(error) })
    }

    onLocationSuccess(location) {
        this.setLocation(location)
        this.sendSMS(location)
    }

    async sendSMS(location) {
        const phones = await this.storage.getItem('@phone')

        if (null === phones) {
            return
        }

        const coords = location.coords

        phones.split(',').forEach((phone) => {
            this.smsService.sendAlert(phone, coords)
        })
    }

    updateBluetoothState(state) {
        this.setState({ bluetoothState: state })
    }

    onBeaconDetected(beacon) {
        // {
        //   rssi: -65,
        //   txPower: -18,
        //   uid: 'CB:1B:39:C3:C9:AD',
        //   id: '66756d626c6175889910464d424c'
        // }
        const beaconData = this.extractBeaconData(beacon)

        if (!this.isValidBeacon(beaconData.namespace)) {
            return
        }

        this.disableBackgroundService()

        this.getLocation()
    }

    extractBeaconData(beacon) {
        return {
            namespace: beacon.id.substring(0, 14),
            batteryLevel: beacon.id.substring(20, 22)
        }
    }

    isValidBeacon(namespace) {
        return namespace == '66756d626c6175'
    }

    componentDidMount() {
        this.bluetoothService.subscribe((state) => {this.updateBluetoothState(state)}, (beacon) => {this.onBeaconDetected(beacon)})
    }

    activeBackgroundService = () => {
        this.setState({backgroundServiceCheck: true})

        BackgroundTimer.runBackgroundTimer(() => {
            if (!this.state.isScanning) {
                this.startBluetoothScan()
            }
            else {
                this.stopBluetoothScan()
            }
        },
        10000); // 10 segs
    }

    startBluetoothScan() {
        this.bluetoothService.startScanning();
        this.setState({ isScanning: true })
    }

    stopBluetoothScan() {
        if (!this.state.isScanning) {
            return
        }

        this.bluetoothService.stopScanning();
        this.setState({ isScanning: false })
    }

    disableBackgroundService = () => {
        this.setState({backgroundServiceCheck: false})

        this.stopBluetoothScan()
        BackgroundTimer.stopBackgroundTimer();
    }

    render() {
        if (this.state.bluetoothState == "PoweredOff") {
          return (
                <View>
                    <Text>Enciende tu bluetooth</Text>
                </View>
          )
        }
        else if (this.state.bluetoothState == "PoweredOn") {
            if (this.state.backgroundServiceCheck == false) {
                return (
                    <View>
                        <Text>Asegurate de que la tobillera tiene bateria y esta correctamente colocada</Text>
                        <Button onPress={this.activeBackgroundService} title="Activar servicio Drop Alert"></Button>
                    </View>
                )
            }
            return (
                <View>
                    <Button onPress={this.disableBackgroundService} title="Desactivar servicio Drop Alert"></Button>
                </View>
            )
        }
        return (<View></View>)

    }
}
