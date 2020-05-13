/**
 * Created by stephan.garcia on 2020-05-03.
 */

import {LightningElement, api} from 'lwc';
import camping from "./camping.html";
import desert from "./desert.html";
import fishing from "./fishing.html";
import mountain from "./mountain.html";
import empty from "./empty.html";

export default class LwcMessagingIllustration extends LightningElement {

    @api illustrationName;


    renderHtml = {
        'camping': camping,
        'desert': desert,
        'fishing': fishing,
        'mountain': mountain,
        'empty': empty
    };

    render() {

        switch (this.illustrationName) {
            case 'camping':
                return this.renderHtml['camping'];
            case 'desert':
                return this.renderHtml['desert'];
            case 'fishing':
                return this.renderHtml['fishing'];
            case 'mountain':
                return this.renderHtml['mountain'];
            case 'empty':
                return this.renderHtml['empty'];
            default:
                return empty;
        }

    }

}