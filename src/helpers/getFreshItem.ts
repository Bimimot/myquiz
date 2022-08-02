import isEqual from "lodash.isequal";
import { TCard } from "../types";

export const getFreshItem = ((): Function => {
    let previousItem = {};

    const getFreshItem = (arr: TCard[]): TCard => {
        const freshItem = arr[Math.round(Math.random() * (arr.length - 1))];
        if (isEqual(freshItem, previousItem)) {
            return getFreshItem(arr)
        } else {
            previousItem = { ...freshItem };
            return freshItem
        }
    };
    return getFreshItem
})();
