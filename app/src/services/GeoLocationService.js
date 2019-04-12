import Geolocation from 'react-native-geolocation-service'

export default class GeoLocationService {

    getCurrentPosition(success, error) {
        Geolocation.getCurrentPosition(
            (position) => {
                success(position)
            },
            (error) => {
                error(error)
                console.log(error)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50 }
        )
    }
}
