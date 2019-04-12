import React from 'react'
import { Button, Text, View, AsyncStorage } from 'react-native'
import SmsService from '../services/SmsService.js'
import GeoLocationService from '../services/GeoLocationService.js'

export default class GeoLocationButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = { loading: false, location: {} }

        this.smsService = new SmsService()
        this.geoLocationService = new GeoLocationService()
    }

    setLocation(location) {
        this.setState({ location: location, loading: false });
    }

    getLocation = () => {
        this.geoLocationService.getCurrentLocation(this.onLocationSuccess, this.setLocation)
    }

    onLocationSuccess(location) {
        this.setLocation(location)
        this.sendSMS()
    }

    async sendSMS() {
//        const phone = await AsyncStorage.getItem('phone')
//        if (null !== phone) {
//            console.log('Phone not exist!')
//        }
        const phone = '635123456'
        const coords = this.state.location.coords
        this.smsService.sendAlert(phone, coords)
    }

    render() {
        const { loading, location } = this.state;
        return (
            <View>
                <Button title='Get Location' onPress={this.getLocation} disabled={loading} />

                <View>
                    <Text>{JSON.stringify(location, null, 4)}</Text>
                </View>
            </View>
        );
    }
}
