import { sampleGames } from "../global_components/GlobalData";
import { GameInterface } from "../global_components/GlobalInterface";

export const fetchGames = async (): Promise<GameInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(sampleGames);
        }, 3000); 
    });
};