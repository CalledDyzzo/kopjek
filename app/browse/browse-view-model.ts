import { ObservableProperty } from "~/browse/observable-property-decorator";
import { Observable } from "tns-core-modules/data/observable";

export class BrowseViewModel extends Observable {
countries: { name: string, imageSrc: string }[] = [
    { name: "ticket1", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket2", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket3", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket4", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket5", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket6", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket7", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket8", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket9", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket10", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket11", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket12", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket13", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket14", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket15", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
    { name: "ticket16", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCDuwPbgd2skZ_-WacrJTWGICpK-4yDF7l0ECzOGOd-egDdZsx" },
];

constructor() {
    super();
}
}
