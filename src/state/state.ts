import { State } from "../types/state";

export const state: State = {
    gridWidth: 10,
    gridHeight: 10,
    cellSize: 10,
    direction: undefined,
    snakeBody: [{ x: 8, y: 5 }],
    snakeHead: { x: 5, y: 5 },
    gameOver: false,
    cherry: { x2: 5, y2: 5 },
    teleportSnake: false,
};
