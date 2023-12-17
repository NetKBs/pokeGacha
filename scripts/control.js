import { retrieveAPIData, saveCardsData, clearDB} from "./model.js"
import { displayCardsContainer } from "./view.js";

export const spinGachaBtn = async () => {
    await retrieveAPIData();
    displayCardsContainer();
}
export const deleteAll = () => {
    clearDB();
    displayCardsContainer();
}