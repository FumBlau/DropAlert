import { BleManager, LogLevel } from 'react-native-ble-plx'
import Eddystone from "@lg2/react-native-eddystone";

export default BluetoohtService {
    constructor(){
        this.bleManager = new BleManager()
        this.bleManager.setLogLevel(LogLevel.Verbose)
    }

    subscribe(callback) {
        this.onBluetoothStateChange(callback)
        this.onBeaconDetected()
    }

    onUID(beacon) {
        console.log("UID Beacon:", beacon);
    }

    startScanning = () => {
        Eddystone.startScanning();
    }

    onBluetoothStateChange = (callback) => {
        const subscription = this.bleManager.onStateChange((state) => {
            callback(state)
        }, true)
    }

    onBeaconDetected = () => {
        Eddystone.addListener("onUIDFrame", this.onUID);
        //Eddystone.addListener("onEIDFrame", this.onEID);
        //Eddystone.addListener("onURLFrame", this.onUrl);
        //Eddystone.addListener("onTelemetryFrame", this.onTelemetry);
        //Eddystone.addListener("onEmptyFrame", this.onEmptyFrame);
        //Eddystone.addListener("onStateChanged", this.onStateChanged);
    }
}
