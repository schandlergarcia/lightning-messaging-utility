/**
 * The lighting messaging utility is used as a framework for displaying important messages to users. Please follow
 * the messaging guidelines at https://www.lightningdesignsystem.com/guidelines/messaging/overview/ to
 * ensure you are using the right kinds of messaging.
 */
import {LightningElement, api} from 'lwc';

export default class LwcMessagingUtility extends LightningElement {

    @api showMessage;
    @api maxWidth; // maxWidth is a number that is converted to a percentage
    @api messageType; // alert, inline, prompt, illustration
    @api messageTitle;
    @api messageBody;
    @api messageVariant;
    @api showIcon;
    @api iconName = 'utility:check';
    @api iconSize = 'small';
    @api iconVariant = 'inverse';
    @api iconAlternativeText;
    @api allowClose;
    @api illustrationName;
    @api buttonLabel = 'Okay';

    closeMessage(){

        this.showMessage = false;
        const closeEvent = new CustomEvent('closemessage');
        this.dispatchEvent(closeEvent);

    }

    // Dynamic styles & rendering

    get isAlert(){

        return this.messageType === 'alert'

    }

    get alertMessageClass(){

        switch (this.messageVariant) {
            case 'info':
                return 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_info';
            case 'warning':
                return 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_warning';
            case 'error':
                return 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_error';
            case 'offline':
                return 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_offline';
            case 'success':
                return 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_offline';
            default:
                return 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_info';
        }
    }

    get inlineMessageClass(){

        switch (this.messageVariant) {
            case 'info':
                return 'slds-box slds-m-bottom--medium slds-theme_info slds-theme_alert-texture';
            case 'warning':
                return 'slds-box slds-m-bottom--medium slds-theme_warning slds-theme_alert-texture';
            case 'error':
                return 'slds-box slds-m-bottom--medium slds-theme_error slds-theme_alert-texture';
            case 'offline':
                return 'slds-box slds-m-bottom--medium slds-theme_offline slds-theme_alert-texture';
            case 'success':
                return 'slds-box slds-m-bottom--medium slds-theme_success slds-theme_alert-texture';
            default:
                return 'slds-box slds-m-bottom--medium slds-theme_info slds-theme_alert-texture';
        }
    }

    get promptMessageClass(){

        switch (this.messageVariant) {
            case 'info':
                return 'slds-modal__header slds-theme_info slds-theme_alert-texture';
            case 'warning':
                return 'slds-modal__header slds-theme_warning slds-theme_alert-texture';
            case 'error':
                return 'slds-modal__header slds-theme_error slds-theme_alert-texture';
            case 'offline':
                return 'slds-modal__header slds-theme_offline slds-theme_alert-texture';
            case 'success':
                return 'slds-modal__header slds-theme_success slds-theme_alert-texture';
            default:
                return 'slds-modal__header slds-theme_info slds-theme_alert-texture';
        }
    }

    get isInline(){

        return this.messageType === 'inline'

    }

    get isPrompt(){

        return this.messageType === 'prompt'

    }

    get isIllustration(){

        return this.messageType === 'illustration'

    }

    get containerWidth(){

        if(this.maxWidth){

            return 'max-width:' + this.maxWidth + '%';

        } else {

            return 'max-width:100%';

        }

    }


}