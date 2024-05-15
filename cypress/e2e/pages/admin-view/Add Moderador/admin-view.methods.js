
import { AdminViewElements } from "./admin-view.elements";

export class AdminViewMethods {
    static ModeradorOptionClick() {
        AdminViewElements.buttonsActions.moderadorOption.click();
    }
    static AdministradorViewClick() {
        AdminViewElements.buttonsActions.selectAdministradorView.click();
    }
    static AddNewModerador() {
        AdminViewElements.buttonsActions.addNewModerador.click();
    }
    static ClickAddModeradorInput(text) {
        AdminViewElements.inputsActions.inputAddModerador.type(text);
    }
}