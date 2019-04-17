import { StyleSheet } from 'react-native';

export default class Style {
    constructor() {
        this.class = StyleSheet.create({
            normalTextSize: {
                fontSize: 16
            },
            topSeparation: {
                marginTop: 20
            }
        })
    }
}
