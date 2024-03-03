import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicPage extends Page {
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamic_controls');
    }    


    /**
     * define selectors using getter methods
     */
    get inputText () {
        return $('#input-example > input[type=text]');
    }

    get inputButtom () {
        return $('#input-example > button');
    }

    get checkbox () {
        return $('#checkbox');
    }
    
    get checkboxButtom () {
        return $('#checkbox-example > button');
    }

}

export default new DynamicPage();
