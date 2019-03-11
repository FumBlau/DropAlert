import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Button, Input } from 'react-native-elements'

import ConfigForm from '../components/ConfigForm.js'

describe('ConfigForm', () => {
    beforeEach(() => {
        this.configFormRenderer = renderer.create(<ConfigForm />)
        this.classInstance = this.configFormRenderer.getInstance()
    })

    it('shows an error message when phone is not valid', () => {
        this.classInstance.setPhone('1')

        expect(this.classInstance.state.error).toBe(true)
    })

    it('saves the phone to the local storage when the button is clicked', () => {
        this.classInstance.setPhone('123456789')
        this.classInstance.savePhone()

        expect(this.classInstance.state.isSaved).toBe(true)
    })
})
