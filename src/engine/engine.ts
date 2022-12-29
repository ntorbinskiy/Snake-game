import { EventTypes, Reducer, Initializer, Direction } from "./state";

function absurd(val: never): never {
    throw new Error("");
}

export const createInitialState: Initializer = (options) => {
    return {
        options,
        direction: Direction.None,
        snakeBody: {
            head: { x: 1, y: 2 },
            body: [{ x: 2, y: 2 }],
        },
        gameOver: false,
        cherries: [{ x: 3, y: 5 }],
    };
};

export const reduceGameEvents: Reducer = (state, event) => {
    const { head, body } = state.snakeBody;
    const { x, y } = head;

    switch (event.type) {
        case EventTypes.KeyArrowDown: {
            return {
                ...state,
                snakeBody: {
                    head: {
                        y: y + 1,
                        x,
                    },
                    body,
                },
            };
        }
        case EventTypes.KeyArrowUp: {
            return {
                ...state,
                snakeBody: {
                    head: {
                        y: y - 1,
                        x,
                    },
                    body,
                },
            };
        }
        case EventTypes.KeyArrowLeft: {
            return {
                ...state,
                snakeBody: {
                    head: {
                        x: x - 1,
                        y,
                    },
                    body,
                },
            };
        }
        case EventTypes.KeyArrowRight: {
            return {
                ...state,
                snakeBody: {
                    head: {
                        x: x + 1,
                        y,
                    },
                    body,
                },
            };
        }
        case EventTypes.Tick: {
            return { ...state };
        }
        default:
            return absurd(event);
    }
};
