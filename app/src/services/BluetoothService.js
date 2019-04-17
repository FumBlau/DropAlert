import { BleManager, LogLevel } from 'react-native-ble-plx'
import Eddystone from "@lg2/react-native-eddystone";

export default class BluetoothService {
    constructor() {
        this.bleManager = new BleManager()
        this.bleManager.setLogLevel(LogLevel.Verbose)
    }

    subscribe(onBluetoothStateChangeCallback, onBeaconDetectedCallback) {
        this.onBluetoothStateChange(onBluetoothStateChangeCallback)
        this.onBeaconDetected(onBeaconDetectedCallback)
    }

    startScanning() {
        Eddystone.startScanning()
    }

    stopScanning() {
        Eddystone.stopScanning()
    }

    onBluetoothStateChange = (callback) => {
        const subscription = this.bleManager.onStateChange((state) => {
            callback(state)
        }, true)
    }

    onBeaconDetected = (callback) => {
        Eddystone.addListener("onUIDFrame", callback)
    }
}
