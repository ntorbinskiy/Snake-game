import { state } from "../state/state";
import { movementKeys } from "../types/state";

const movementKeyCodes: movementKeys = {
    UP: "38",
    DOWN: "40",
    LEFT: "37",
    RIGHT: "39",
};

const moveSnake = (event: KeyboardEvent) => {
    if (event.key === "UP") {
        return { ...state };
    }
};
