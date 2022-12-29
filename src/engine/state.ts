export interface SnakeBodyItem {
    readonly x: number;
    readonly y: number;
}

export type Snake = {
    readonly head: SnakeBodyItem;
    readonly body: readonly SnakeBodyItem[];
};

export type Cherry = {
    readonly x: number;
    readonly y: number;
};

export const enum Direction {
    None = "None",
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

export type GameOptions = {
    readonly gridWidth: number;
    readonly gridHeight: number;
    readonly teleportSnake: boolean;
    readonly initialCherryCount: number;
};

export interface State {
    readonly options: GameOptions;
    readonly direction: Direction;
    readonly snake: Snake;
    readonly gameOver: boolean;
    readonly cherries: readonly Cherry[];
}

export const enum EventTypes {
    KeyArrowUp = "KeyArrowUp",
    KeyArrowDown = "KeyArrowDown",
    KeyArrowLeft = "KeyArrowLeft",
    KeyArrowRight = "KeyArrowRight",
    Tick = "Tick",
}

export type EventKeyArrowUp = { readonly type: EventTypes.KeyArrowUp };
export type EventKeyArrowDown = { readonly type: EventTypes.KeyArrowDown };
export type EventKeyArrowLeft = { readonly type: EventTypes.KeyArrowLeft };
export type EventKeyArrowRight = { readonly type: EventTypes.KeyArrowRight };
export type EventTick = { readonly type: EventTypes.Tick };

export type Event =
    | EventKeyArrowDown
    | EventKeyArrowLeft
    | EventKeyArrowRight
    | EventKeyArrowUp
    | EventTick;

export type Reducer = (state: State, event: Event) => State;

export type Initializer = (options: GameOptions) => State;
