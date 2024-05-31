import { BookElements } from './show.elements'

export class BookMethods {

    static verifyNotificationEnabled() {
        BookElements.successMessages.toast.should(
            'contain.text',
            'Notificación activada correctamente'
        )
    }

    static verifyNotificationDisabled() {
        BookElements.successMessages.toast.should(
            'contain.text',
            'Notificación desactivada correctamente'
        )
    }

}
