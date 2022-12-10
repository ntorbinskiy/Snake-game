import { State } from "../types/state";

export const state: State = {
    gridWidth: 10,
    gridHeight: 10,
    direction: undefined,
    snakeBody: [{ x: 8, y: 5 }],
    gameOver: false,
    cherry: { x1: 5, y1: 5 },
    teleportSnake: false,
};
