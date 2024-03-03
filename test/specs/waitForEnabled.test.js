import { expect } from '@wdio/globals'
import DynamicPage from '../pageobjects/dynamic.page.js';

describe('Wait for Checkbox', () => {
    it('Checkbox should not to be visible', async () => {
        //Go to the page
        await DynamicPage.open();
        //wait for component to be visible
        await expect(DynamicPage.checkbox).toBePresent();
        //click on the component
        await DynamicPage.checkboxButtom.click();
        //wait for action
        await expect (DynamicPage.checkbox).not.toBeExisting();
    })
})

describe('Wait for Enabled', () => {
    it('Input text should be enabled', async () => {
        //Go to the page
        await DynamicPage.open();
        //wait for component to be visible
        await expect(DynamicPage.inputButtom).toBeClickable();
        //click on the component
        await DynamicPage.inputButtom.click();
        //wait for action
        await expect(DynamicPage.inputText).toBeEnabled();
    })
})