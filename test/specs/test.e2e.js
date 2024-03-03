import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import { userName, password } from '../../data/loginData.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(userName, password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(
            'You logged into a secure area!'))
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
    })
})

