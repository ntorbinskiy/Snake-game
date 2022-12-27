interface SnakeBody {
    bodyX: number;
    bodyY: number;
}

export interface State {
    gridWidth: number;
    gridHeight: number;
    direction: undefined | string;
    snakeBody: Array<SnakeBody>;
    gameOver: boolean;
    cherry: { cherryX: number; cherryY: number };
    teleportSnake: boolean;
}
export interface CellProps {
    cellX: number;
    cellY: number;
}
export interface CellsProps {
    gridHeight: number;
    gridWidth: number;
}
export interface SnakeHeadProps {
    gridWidth: number;
    gridHeight: number;
}

export interface movementKeys {
    UP: "38";
    DOWN: "40";
    LEFT: "37";
    RIGHT: "39";
}
