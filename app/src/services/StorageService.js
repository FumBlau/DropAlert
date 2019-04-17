import AsyncStorage from '@react-native-community/async-storage';

export default class StorageService {
    async getItem(key) {
        const item = await AsyncStorage.getItem(key)

        return item
    }

    async setItem(key, value) {

    }
}
