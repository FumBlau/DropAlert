/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  PermissionsAndroid,
  Platform,
  Text,
  ToastAndroid,
  View,
  AsyncStorage
} from 'react-native';
import SmsService from '../services/SmsService.js'
import GeoLocationService from '../services/GeoLocationService.js'

export default class GeoLocationButton extends Component<{}> {
  state = {
    loading: false,
    location: {}
  };

    constructor(props){
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
    <View /*style={styles.container}*/>
        <Button title='Get Location' onPress={this.getLocation} disabled={loading} />

        <View /*style={styles.result}*/>
            <Text>{JSON.stringify(location, null, 4)}</Text>
        </View>
      </View>
    );
  }
}
