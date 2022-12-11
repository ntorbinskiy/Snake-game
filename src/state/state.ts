import { State } from "../types/state";

export const state: State = {
    gridWidth: 5,
    gridHeight: 5,
    direction: undefined,
    snakeBody: [{ bodyX: 8, bodyY: 5 }],
    snakeHead: { headX: 4, headY: 3 },
    gameOver: false,
    cherry: { cherryX: 5, cherryY: 5 },
    teleportSnake: false,
};
