import SendSMS from 'react-native-sms-x'

export default SendSms {

    sendAlert(phone, coords) {
        const body = 'Aviso urgente en https://www.google.com/maps/search/?api=1&query=' + coords.latitude + ',' + coords.longitude
        this.send(phone, body)
    }

    send(phone, body) {
        SendSMS.send(123, phone, body,
            (msg)=>{
                console.log(msg)
            }
        );
    }
}
