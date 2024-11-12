import { sampleGames } from "../global_components/GlobalData.tsx";
import { GameInterface } from "../global_components/GlobalInterface.tsx";

export const fetchGames = async (): Promise<GameInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(sampleGames);
        }, 3000); 
    });
};