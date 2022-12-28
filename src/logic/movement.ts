import { state } from "../state/state";
import { movementKeys, State } from "../types/state";

const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";

export const moveSnake = (state: State) => {
    const direction = state.direction;

    if (direction === UP) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyY - 1;
        });
    }

    if (direction === DOWN) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyY + 1;
        });
    }

    if (direction === LEFT) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyX - 1;
        });
    }

    if (direction === RIGHT) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyX - 1;
        });
    }

    return state;
};
