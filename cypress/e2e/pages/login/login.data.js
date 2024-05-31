import { user, admin, moderator } from '../../../fixtures/Login.json'

export class LoginData {
    static get userCredentials() {
        return {...user}
    }
    static get moderatorCredentials() {
        return {...moderator}
    }
    static get adminCredentials() {
        return {...admin}
    }
}