import { state } from "../state/state";
import { movementKeys } from "../types/state";

const movementKeyCodes: movementKeys = {
    UP: "38",
    DOWN: "40",
    LEFT: "37",
    RIGHT: "39",
};
const movementDirectionKeys = {};

export const moveSnake = (event: Event) => {
    const { UP, DOWN, LEFT, RIGHT } = movementKeyCodes;
    if (!(event instanceof KeyboardEvent)) {
        return;
    }

    const key = event.key;

    if (key === UP) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyY - 1;
        });
    }

    if (key === DOWN) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyY + 1;
        });
    }

    if (key === LEFT) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyX - 1;
        });
    }

    if (key === RIGHT) {
        return state.snakeBody.map((bodyItem) => {
            return bodyItem.bodyX - 1;
        });
    }

    return state;
};
