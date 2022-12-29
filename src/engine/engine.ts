import {
    EventTypes,
    Reducer,
    Initializer,
    Direction,
    SnakeBodyItem,
    Snake,
} from "./state";

function absurd(val: never): never {
    throw new Error("");
}

export const createInitialState: Initializer = (options) => {
    return {
        options,
        direction: Direction.None,
        snake: {
            head: { x: 1, y: 2 },
            body: [{ x: 2, y: 2 }],
        },
        gameOver: false,
        cherries: [{ x: 3, y: 5 }],
    };
};

const getNewSnakePosition = (
    newHead: SnakeBodyItem,
    currentSnake: Snake
): Snake => {
    return {
        head: newHead,
        body: [currentSnake.head, ...currentSnake.body.slice(1)],
    };
};

export const reduceGameEvents: Reducer = (state, event) => {
    const { head, body } = state.snake;
    const { x, y } = head;

    switch (event.type) {
        case EventTypes.KeyArrowDown: {
            return {
                ...state,
                snake: getNewSnakePosition(
                    {
                        y: y + 1,
                        x,
                    },
                    state.snake
                ),
            };
        }

        case EventTypes.KeyArrowUp: {
            return {
                ...state,
                snake: getNewSnakePosition(
                    {
                        y: y - 1,
                        x,
                    },
                    state.snake
                ),
            };
        }

        case EventTypes.KeyArrowLeft: {
            return {
                ...state,
                snake: getNewSnakePosition(
                    {
                        x: x - 1,
                        y,
                    },
                    state.snake
                ),
            };
        }

        case EventTypes.KeyArrowRight: {
            return {
                ...state,
                snake: getNewSnakePosition(
                    {
                        x: x + 1,
                        y,
                    },
                    state.snake
                ),
            };
        }

        case EventTypes.Tick: {
            return { ...state };
        }

        default:
            return absurd(event);
    }
};
