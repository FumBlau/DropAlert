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
import Geolocation from 'react-native-geolocation-service'
import SendSMS from 'react-native-sms-x'

export default class GeoLocationButton extends Component<{}> {
  state = {
    loading: false,
    location: {}
  };

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
        (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  hasSendSMSPermission = async () => {
    const hasSMSPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.SEND_SMS
    );

    if (hasSMSPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Send SMS permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Send SMS permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();
    const hasSendSMSPermission = await this.hasSendSMSPermission();

    if (!hasLocationPermission) return;
    if (!hasSendSMSPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
          console.log(position);
          this.sendSMS();
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50 }
      );
    });
  }

    async sendSMS() {
//        const phone = await AsyncStorage.getItem('phone')
//        if (null !== phone) {
//            console.log('Phone not exist!')
//        }
        const phone = '635123456'
        const coords = this.state.location.coords
        const body = 'Aviso urgente en https://www.google.com/maps/search/?api=1&query=' + coords.latitude + ',' + coords.longitude

        SendSMS.send(123, phone, body,
            (msg)=>{
                console.log(msg)
            }
        );
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
