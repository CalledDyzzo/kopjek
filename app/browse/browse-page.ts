import { NavigatedData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { BrowseViewModel } from "./browse-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}
