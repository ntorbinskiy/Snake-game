export interface State {
    gridWidth: number;
    gridHeight: number;
    direction: undefined | string;
    snakeHead: { headX: number; headY: number };
    snakeBody: Array<Object>;
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
