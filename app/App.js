import React from 'react'
import { PermissionsAndroid, View } from 'react-native'
import { Header } from 'react-native-elements'
import ConfigForm from './src/components/ConfigForm.js'
import ActivationButton from './src/components/ActivationButton.js'

export default class App extends React.Component {

    constructor() {
        super();

        this.checkPermissions()
    }

    async checkPermissions() {
        const hasLocationPermission = await this.hasPermission('ACCESS_FINE_LOCATION')
        const hasSendSMSPermission = await this.hasPermission('SEND_SMS')
        const hasCoarseLocationPermission = await this.hasPermission('ACCESS_COARSE_LOCATION')

        if (!hasLocationPermission) return
        if (!hasSendSMSPermission) return
        if (!hasCoarseLocationPermission) return
    }

  hasPermission = async (permission) => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS[permission]
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[permission]
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(permission + ' permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(permission + ' permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Drop Alert', style: { color: '#fff', fontSize: 24 } }}
        />

        <ConfigForm></ConfigForm>

        <ActivationButton></ActivationButton>

      </View>
    )
  }
}
