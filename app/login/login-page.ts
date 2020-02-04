import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { LoginViewModel } from "./login-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new LoginViewModel();
}
